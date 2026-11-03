'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_IN_OUT, EASE_OUT, prefersReducedMotion } from '../lib/motion'

const MIN_DURATION = 1300 // ms — keeps the count-up smooth even on fast loads
const MAX_WAIT = 3000 // ms — never hold a slow mobile connection on the intro longer than this

/** Counter + curtain intro. Plays on every load; reaches 100% once fonts and the page are ready. */
export default function Preloader() {
  const [show, setShow] = useState(true)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShow(false)
      return
    }

    let ready = false
    let raf = 0
    let hide: ReturnType<typeof setTimeout> | undefined
    const markReady = () => (ready = true)
    const pageLoaded = document.readyState === 'complete' ? Promise.resolve() : new Promise((r) => window.addEventListener('load', r, { once: true }))
    Promise.all([pageLoaded, document.fonts?.ready]).then(markReady, markReady)
    const cap = setTimeout(markReady, MAX_WAIT)

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
      clearTimeout(cap)
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
          transition={{ duration: 0.9, ease: EASE_IN_OUT }}
          aria-hidden
        >
          <div className="preloader-name">
            <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: EASE_OUT }}>
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
