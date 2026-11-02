'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile, stats } from '../data/portfolio'
import Magnetic from './Magnetic'
import Counter from './Counter'
import ShaderBg from './ShaderBg'
import Scramble from './Scramble'

const ease = [0.16, 1, 0.3, 1] as const
const INTRO = 1.25 // wait for preloader curtain

function Typer({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const done = !del && text === word
    const empty = del && text === ''
    const t = setTimeout(
      () => {
        if (done) return setDel(true)
        if (empty) {
          setDel(false)
          setI((n) => n + 1)
          return
        }
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      },
      done ? 1800 : del ? 35 : 70,
    )
    return () => clearTimeout(t)
  }, [text, del, i, words])

  return <span className="typer">{text}</span>
}

const lines = [
  { words: ['AI', 'Engineer'], cls: '' },
  { words: ['who', 'ships'], cls: 'outline' },
  { words: ['real', 'systems.'], cls: '', accentLast: true },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(8px)'])

  let w = 0
  return (
    <section ref={ref} className="hero">
      <motion.div className="hero-bg" style={{ scale: canvasScale, filter: blur }}>
        <div className="hero-glow" style={{ left: '40%', top: '-10%' }} aria-hidden />
        <ShaderBg />
      </motion.div>
      <div className="hero-tint" aria-hidden />
      {[22, 50, 78].map((t, i) => (
        <motion.div
          key={t}
          className="hero-hline"
          style={{ top: `${t}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: INTRO + i * 0.15, ease }}
          aria-hidden
        />
      ))}
      <div className="scroll-cue" aria-hidden>
        SCROLL
      </div>

      <motion.div className="container" style={{ y, opacity: fade }}>
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: INTRO, ease }}
        >
          <span className="status">
            <i /> {profile.availability}
          </span>
          <span className="eyebrow">
            <Scramble text={profile.location} />
          </span>
        </motion.div>

        <h1 className="display hero-title" aria-label="AI Engineer who ships real systems.">
          {lines.map((l) => (
            <span key={l.words.join()} className={`line-mask ${l.cls}`}>
              {l.words.map((word, j) => {
                const d = INTRO + 0.1 + w++ * 0.08
                const accent = l.accentLast && j === l.words.length - 1
                return (
                  <motion.span
                    key={word}
                    className={accent ? 'grad-text grad-anim' : undefined}
                    style={{ marginRight: '0.22em' }}
                    initial={{ y: '105%', opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.1, delay: d, ease }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: INTRO + 0.75, ease }}
        >
          <p className="hero-lede">
            I&apos;m <strong>{profile.name}</strong> — I build <Typer words={profile.typer} />
            <br />
            {profile.lede}
          </p>
          <div className="hero-actions">
            <Magnetic>
              <a href="#work" className="btn btn-primary">
                See the work <span className="arrow">↗</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resume} className="btn btn-ghost" download>
                Résumé <span className="arrow">↓</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="container"
        style={{ marginTop: 56, position: 'relative', zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: INTRO + 1 }}
      >
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>
                <Counter to={s.value} />
                <sup>{s.suffix}</sup>
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
