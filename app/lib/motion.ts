// Shared motion constants and helpers — one source for every animated component.

/** Expo-out: fast start, long soft settle. Used for reveals and text. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const
/** Slightly gentler out-curve for scroll reveals. */
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const
/** In-out curve for curtains / wipes. */
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Run `frame` on requestAnimationFrame only while `el` is on screen.
 * Avoids burning CPU/GPU (and battery on mobile) for off-screen canvases.
 */
export function rafWhileVisible(el: Element, frame: (now: number) => void) {
  let raf = 0
  let running = false
  const loop = (now: number) => {
    frame(now)
    raf = requestAnimationFrame(loop)
  }
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) {
      running = true
      raf = requestAnimationFrame(loop)
    } else if (!e.isIntersecting && running) {
      running = false
      cancelAnimationFrame(raf)
    }
  })
  io.observe(el)
  return () => {
    io.disconnect()
    cancelAnimationFrame(raf)
  }
}
