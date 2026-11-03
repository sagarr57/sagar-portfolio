'use client'

import { useEffect, useRef } from 'react'
import { prefersReducedMotion, rafWhileVisible } from '../lib/motion'

/**
 * Original WebGL "molten aurora" background: domain-warped fbm noise
 * in the orange → gold palette, reacting softly to the pointer.
 * Falls back to nothing (CSS glow shows through) if WebGL is unavailable.
 */
const frag = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++){ v += a * noise(p); p = r * p * 2.0; a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0) * 2.2;
  float t = u_time * 0.06;
  vec2 m = (u_mouse - 0.5) * 0.6;

  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 3.0*q + vec2(1.7, 9.2) + m + t*1.4), fbm(p + 3.0*q + vec2(8.3, 2.8) - m));
  float f = fbm(p + 3.5*r);

  vec3 c0 = vec3(0.02, 0.02, 0.02);
  vec3 c1 = vec3(1.0, 0.42, 0.0);   // #FF6A00
  vec3 c2 = vec3(1.0, 0.55, 0.14);  // #FF8C24
  vec3 c3 = vec3(0.83, 0.69, 0.22); // #D4AF37
  vec3 col = mix(c0, c1, smoothstep(0.35, 0.95, f));
  col = mix(col, c2, smoothstep(0.55, 1.05, length(q)));
  col = mix(col, c3, smoothstep(0.75, 1.3, r.x) * 0.6);

  // ribbons
  float band = smoothstep(0.012, 0.0, abs(fract(f * 6.0 + t) - 0.5) - 0.48);
  col += band * c2 * 0.15;

  // vignette + darken left column for legibility
  float vig = smoothstep(1.25, 0.2, length(uv - vec2(0.68, 0.45)));
  col *= vig * mix(0.35, 1.0, smoothstep(0.05, 0.75, uv.x));
  gl_FragColor = vec4(col * 0.85, 1.0);
}`

const vert = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`

export default function ShaderBg() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const reduce = prefersReducedMotion()
    let stop = () => {}

    /** Compile, link and start drawing. Re-run after a lost WebGL context (common on iOS when backgrounded). */
    const init = () => {
      const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false, powerPreference: 'low-power' })
      if (!gl) return
      const sh = (type: number, src: string) => {
        const s = gl.createShader(type)!
        gl.shaderSource(s, src)
        gl.compileShader(s)
        return s
      }
      const prog = gl.createProgram()!
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, vert))
      gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, frag))
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
      gl.useProgram(prog)

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(prog, 'a')
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

      const uRes = gl.getUniformLocation(prog, 'u_res')
      const uTime = gl.getUniformLocation(prog, 'u_time')
      const uMouse = gl.getUniformLocation(prog, 'u_mouse')

      // Render at half resolution — it's a soft field, so this is invisible and 4× cheaper.
      // Only resize when the size really changes (iOS fires resize on every address-bar move,
      // and setting canvas.width clears the canvas).
      const scale = 0.5
      const resize = () => {
        const w = Math.max(1, Math.round(canvas.clientWidth * scale))
        const h = Math.max(1, Math.round(canvas.clientHeight * scale))
        if (w === canvas.width && h === canvas.height) return
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
        gl.uniform2f(uRes, w, h)
      }
      canvas.width = canvas.height = 0
      resize()
      const ro = new ResizeObserver(resize)
      ro.observe(canvas)

      let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5
      const onMove = (e: PointerEvent) => {
        tx = e.clientX / window.innerWidth
        ty = 1 - e.clientY / window.innerHeight
      }
      window.addEventListener('pointermove', onMove, { passive: true })

      const draw = (t: number) => {
        mx += (tx - mx) * 0.03
        my += (ty - my) * 0.03
        gl.uniform1f(uTime, t)
        gl.uniform2f(uMouse, mx, my)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
      }
      const start = performance.now()
      const stopLoop = reduce ? (draw(12), () => {}) : rafWhileVisible(canvas, (now) => draw((now - start) / 1000))

      stop = () => {
        stopLoop()
        ro.disconnect()
        window.removeEventListener('pointermove', onMove)
      }
    }

    const onLost = (e: Event) => {
      e.preventDefault() // allow the browser to restore the context
      stop()
    }
    const onRestored = () => init()
    canvas.addEventListener('webglcontextlost', onLost)
    canvas.addEventListener('webglcontextrestored', onRestored)
    init()

    return () => {
      stop()
      canvas.removeEventListener('webglcontextlost', onLost)
      canvas.removeEventListener('webglcontextrestored', onRestored)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" aria-hidden />
}
