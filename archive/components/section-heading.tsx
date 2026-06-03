import { ArrowRight } from "lucide-react"

export function SectionHeading({
  title,
  href = "#",
  cta = "See all posts",
}: {
  title: string
  href?: string
  cta?: string | null
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {cta && (
        <a
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 border-b-2 border-navy pb-0.5 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:border-brand hover:text-brand"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  )
}
