import { User, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CategoryBadge } from "@/components/category-badge"
import { AdWidget, MostLovedWidget } from "@/components/sidebar-widgets"
import { recentPosts } from "@/lib/posts"

export function RecentPosts() {
  return (
    <section className="bg-background pb-16 pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <SectionHeading title="Recent Posts" cta={null} />
            <div className="flex flex-col gap-8">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-[220px_1fr]"
                >
                  <div className="h-44 overflow-hidden rounded-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div>
                    <CategoryBadge category={post.category} />
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy text-balance">
                      <a href="#" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-brand" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-brand" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-10">
            <AdWidget />
            <MostLovedWidget />
          </aside>
        </div>
      </div>
    </section>
  )
}
