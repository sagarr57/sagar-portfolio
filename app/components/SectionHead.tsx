import { MaskHeading, Reveal } from './Reveal'
import Scramble from './Scramble'

/** Eyebrow + masked heading (+ optional side note) used at the top of each section. */
export default function SectionHead({ eyebrow, lines, note }: { eyebrow: string; lines: React.ReactNode[]; note?: string }) {
  return (
    <div className="section-head">
      <div>
        <Reveal>
          <span className="eyebrow section-eyebrow">
            <Scramble text={eyebrow} />
          </span>
        </Reveal>
        <MaskHeading lines={lines} />
      </div>
      {note && (
        <Reveal delay={0.2}>
          <p>{note}</p>
        </Reveal>
      )}
    </div>
  )
}
