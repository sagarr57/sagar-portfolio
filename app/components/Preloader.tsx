'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Short counter + curtain intro. Shown once per browser session. */
export default function Preloader() {
  const [show, setShow] = useState(true)
  const [n, setN] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('sm-intro') === '1'
      sessionStorage.setItem('sm-intro', '1')
    } catch {}
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShow(false)
      return
    }
    const start = performance.now()
    const dur = 1300
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setShow(false), 180)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
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
