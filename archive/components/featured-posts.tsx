import { User, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { featuredPosts } from "@/lib/posts"

export function FeaturedPosts() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Posts" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-lg border-l-4 border-brand"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-bold leading-snug text-white text-balance">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-3 flex items-center gap-5 text-sm text-white/85">
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
    </section>
  )
}
