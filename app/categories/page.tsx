import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteShell, PageHero, NewsletterCta } from "@/components/proposed"
import { categories, categoryMeta, getByCategory } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Categories — Newpress",
  description: "Explore Newpress coverage across politics, business, sports, technology, entertainment, and local news.",
}

function slugify(c: string) {
  return c.toLowerCase().replace(/\s+/g, "-")
}

export default function CategoriesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Categories"
        description="Pick a topic and dive into the stories shaping it."
        crumbs={[{ label: "Categories" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = getByCategory(category).length
            return (
              <Link
                key={category}
                href={`/category/${slugify(category)}`}
                className="group relative overflow-hidden rounded-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={categoryMeta[category].image || "/placeholder.svg"}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-navy-foreground">
                  <span className="inline-block rounded bg-brand px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-brand-foreground">
                    {count} articles
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-extrabold">
                    {category}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-navy-foreground/80">
                    {categoryMeta[category].description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      <NewsletterCta />
    </SiteShell>
  )
}
