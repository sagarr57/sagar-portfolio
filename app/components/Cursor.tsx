'use client'

import { useEffect, useRef } from 'react'

/** Dot + trailing ring cursor (mouse only). The trailing loop sleeps once the ring catches up. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0

    const tick = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(tick) : 0
    }
    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      ring.current?.classList.toggle('hover', !!(e.target as HTMLElement).closest('a, button, [data-cursor]'))
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  )
}
