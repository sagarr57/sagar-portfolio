'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(true)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const hoverRef = useRef(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const ringX = useSpring(x, { stiffness: 190, damping: 18, mass: 0.35 })
  const ringY = useSpring(y, { stiffness: 190, damping: 18, mass: 0.35 })

  useEffect(() => {
    setMounted(true)
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (!mounted || isTouch) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      const now = !!el.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]')
      if (now !== hoverRef.current) {
        hoverRef.current = now
        setHovering(now)
      }
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)
    const onOut  = () => setVisible(false)
    const onIn   = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    document.documentElement.addEventListener('mouseleave', onOut)
    document.documentElement.addEventListener('mouseenter', onIn)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.documentElement.removeEventListener('mouseleave', onOut)
      document.documentElement.removeEventListener('mouseenter', onIn)
    }
  }, [mounted, isTouch, x, y])

  if (!mounted || isTouch) return null

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9998,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? 'rgba(37,99,235,0.75)' : 'rgba(37,99,235,0.40)'}`,
          background: hovering ? 'rgba(37,99,235,0.07)' : 'transparent',
          boxShadow: hovering
            ? '0 0 0 1px rgba(37,99,235,0.12), 0 0 18px rgba(37,99,235,0.18)'
            : 'none',
          transition: 'border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease',
        }}
        animate={{
          width:   hovering ? 48 : 36,
          height:  hovering ? 48 : 36,
          opacity: visible  ? 1  : 0,
          scale:   clicking ? 0.72 : 1,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Precise dot */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          background: '#2563eb',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 6px rgba(37,99,235,0.45)',
        }}
        animate={{
          width:   hovering ? 5   : 8,
          height:  hovering ? 5   : 8,
          opacity: visible  ? 1   : 0,
          scale:   clicking ? 0.4 : 1,
        }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
      />
    </>
  )
}
