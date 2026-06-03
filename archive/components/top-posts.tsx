import { User, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CategoryBadge } from "@/components/category-badge"
import { SubscribeWidget, SocialWidget } from "@/components/sidebar-widgets"
import { topPosts } from "@/lib/posts"

export function TopPosts() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <SectionHeading title="Top Posts" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {topPosts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-lg bg-card shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <CategoryBadge category={post.category} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold leading-snug text-navy text-balance">
                      <a href="#" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
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
            <SubscribeWidget />
            <SocialWidget />
          </aside>
        </div>
      </div>
    </section>
  )
}
