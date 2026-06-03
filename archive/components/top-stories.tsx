import { Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CategoryBadge } from "@/components/category-badge"
import { topStoriesMain, topStoriesList } from "@/lib/posts"

export function TopStories() {
  return (
    <section className="bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Top Stories" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Two main cards */}
          {topStoriesMain.map((post) => (
            <article
              key={post.id}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
              <div className="absolute left-5 top-5">
                <CategoryBadge category={post.category} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl font-bold leading-snug text-white text-balance">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}

          {/* List */}
          <div className="flex flex-col gap-4">
            {topStoriesList.map((post) => (
              <article
                key={post.id}
                className="flex items-center gap-4 rounded-lg bg-card p-3 shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-20 w-24 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0">
                  <h4 className="font-display text-base font-bold leading-snug text-navy">
                    <a href="#" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-brand" />
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
