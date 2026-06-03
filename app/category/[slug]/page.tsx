import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell, PageHero, ArticleCard, NewsletterCta } from "@/components/proposed"
import { categories, categoryMeta, getByCategory, type Category } from "@/lib/articles"

function slugify(c: string) {
  return c.toLowerCase().replace(/\s+/g, "-")
}

function fromSlug(slug: string): Category | undefined {
  return categories.find((c) => slugify(c) === slug)
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: slugify(c) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = fromSlug(slug)
  if (!category) return { title: "Category not found — Newpress" }
  return {
    title: `${category} — Newpress`,
    description: categoryMeta[category].description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = fromSlug(slug)
  if (!category) notFound()

  const items = getByCategory(category)

  return (
    <SiteShell>
      <PageHero
        title={category}
        description={categoryMeta[category].description}
        crumbs={[
          { label: "Categories", href: "/categories" },
          { label: category },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {items.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No articles in this category yet.
          </p>
        )}
      </section>
      <NewsletterCta />
    </SiteShell>
  )
}
