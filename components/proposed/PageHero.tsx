import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export default function PageHero({
  title,
  description,
  crumbs = [],
}: {
  title: string
  description?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-navy-foreground/70">
            {description}
          </p>
        )}
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-foreground/70">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4 opacity-50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
