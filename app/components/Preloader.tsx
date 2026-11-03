'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MIN_DURATION = 1300 // ms — keeps the count-up smooth even on fast loads

/** Counter + curtain intro. Plays on every load; reaches 100% once fonts and the page are ready. */
export default function Preloader() {
  const [show, setShow] = useState(true)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShow(false)
      return
    }

    let ready = false
    let raf = 0
    let hide: ReturnType<typeof setTimeout> | undefined
    const markReady = () => (ready = true)
    const pageLoaded = document.readyState === 'complete' ? Promise.resolve() : new Promise((r) => window.addEventListener('load', r, { once: true }))
    Promise.all([pageLoaded, document.fonts?.ready]).then(markReady, markReady)

    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / MIN_DURATION)
      const eased = 1 - Math.pow(1 - t, 3)
      // Hold at 99% until the page is actually ready.
      const value = Math.round((ready ? eased : Math.min(eased, 0.99)) * 100)
      setN(value)
      if (value < 100) raf = requestAnimationFrame(tick)
      else hide = setTimeout(() => setShow(false), 180)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hide)
      document.documentElement.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = ''
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="preloader-name">
            <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              Sagar Mamindla
            </motion.span>
          </div>
          <div className="preloader-count">
            {String(n).padStart(3, '0')}
            <span>%</span>
          </div>
          <div className="preloader-bar" style={{ transform: `scaleX(${n / 100})` }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
