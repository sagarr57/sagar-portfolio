import { projects, categories, type Project } from '../data/portfolio'
import SectionHead from './SectionHead'
import FeaturedStack from './FeaturedStack'
import ProjectIndex from './ProjectIndex'

/** Fields the stacked feature cards render. */
export type FeaturedProject = Pick<Project, 'slug' | 'title' | 'tagline' | 'category' | 'year' | 'stack' | 'link' | 'metric' | 'highlights' | 'color' | 'code'>
/** Fields a row in the full index (and its hover preview) renders. */
export type IndexProject = Pick<Project, 'slug' | 'title' | 'tagline' | 'category' | 'year' | 'stack' | 'link' | 'metric' | 'color'>

const FEATURED = ['staffena', 'crm-saas', 'ai-pm', 'ai-middleware', 'mindvibe']

/**
 * Server component: picks only what the client islands render, so long-form project
 * write-ups (summary, points) never ship in the JS bundle.
 */
export default function Work() {
  const bySlug = new Map(projects.map((p) => [p.slug, p]))
  const featured: FeaturedProject[] = FEATURED.flatMap((slug) => {
    const p = bySlug.get(slug)
    if (!p) return []
    const { slug: s, title, tagline, category, year, stack, link, metric, highlights, color, code } = p
    return [{ slug: s, title, tagline, category, year, stack: stack.slice(0, 6), link, metric, highlights, color, code }]
  })
  const index: IndexProject[] = projects.map(({ slug, title, tagline, category, year, stack, link, metric, color }) => ({
    slug,
    title,
    tagline,
    category,
    year,
    stack: stack.slice(0, 4),
    link,
    metric,
    color,
  }))
  // Category counts computed once at build time — O(n), not per render.
  const counts: Record<string, number> = { All: projects.length }
  for (const p of projects) counts[p.category] = (counts[p.category] ?? 0) + 1

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead eyebrow="Selected work" lines={['Things I', <>have <em>shipped</em></>]} />
        <FeaturedStack projects={featured} />
        <ProjectIndex projects={index} categories={['All', ...categories]} counts={counts} />
      </div>
    </section>
  )
}
