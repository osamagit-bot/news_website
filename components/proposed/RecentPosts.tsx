import { Clock, User } from "lucide-react"

const recentPosts = [
  {
    id: "r1",
    title: "Quick Simple and Downright Comforting Dishes for Busy Weeknights",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Food",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/food-soup.png",
  },
  {
    id: "r2",
    title: "Make a beauty selfie 2020: new life to go, a short the story across the world",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/lifestyle-masks.png",
  },
  {
    id: "r3",
    title: "New ways to live your game life all the way around",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Gaming",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/gaming-neon.png",
  },
]

const mostLoved = [
  {
    id: "ml1",
    title: "The craftsmen who keep tradition alive",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/workshop.png",
  },
]

export default function RecentPosts() {
  return (
    <section className="bg-background pb-16 pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-10 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Recent Posts</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">Fresh stories from the newsroom</h2>
              </div>
            </div>
            <div className="space-y-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="grid grid-cols-1 gap-5 sm:grid-cols-[220px_1fr]">
                  <div className="h-44 overflow-hidden rounded-lg">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy text-balance">
                      <a href="#" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
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
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Sponsored</p>
              <div className="mt-4 h-44 overflow-hidden rounded-2xl bg-slate-100">
                <img src="/images/ad-banner.png" alt="Advertisement" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Most Loved</p>
              <div className="mt-5 space-y-4">
                {mostLoved.map((post) => (
                  <article key={post.id} className="rounded-2xl border border-border bg-background p-4">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-28 w-full rounded-xl object-cover" />
                    <h4 className="mt-4 font-display text-base font-bold text-navy">
                      <a href="#" className="hover:text-brand">
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
