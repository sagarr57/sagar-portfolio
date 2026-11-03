/** Pill list of technologies. Server-safe (no client JS). */
export default function Tags({ items, max, className = 'tags', style }: { items: string[]; max?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      {(max ? items.slice(0, max) : items).map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  )
}
