import Image from "next/image"
import Link from "next/link"
import { categories, categoryMeta, getByCategory } from "@/lib/articles"
import { SectionHeading } from "@/components/section-heading"

function slugify(c: string) {
  return c.toLowerCase().replace(/\s+/g, "-")
}

export function CategoriesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading title="Browse Categories" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const count = getByCategory(category).length
          return (
            <Link
              key={category}
              href={`/category/${slugify(category)}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={categoryMeta[category].image || "/placeholder.svg"}
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                <h3 className="font-display text-sm font-bold text-navy-foreground">
                  {category}
                </h3>
                <p className="text-xs text-navy-foreground/70">{count} articles</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
