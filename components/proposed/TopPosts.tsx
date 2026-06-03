import { Clock, Facebook, Instagram, Twitter, User } from "lucide-react"

const topPosts = [
  {
    id: "tp1",
    title: "Los angeles compound he is trying to sell",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/lifestyle-masks.png",
  },
  {
    id: "tp2",
    title: "How to Make Choreg Armenia's Eggy",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Food",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/food-banana.png",
  },
  {
    id: "tp3",
    title: "The sound that defined a generation",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/hero-music.png",
  },
  {
    id: "tp4",
    title: "Graduation day memories that last",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Education",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/education-grad.png",
  },
]

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
      {category}
    </span>
  )
}

export default function TopPosts() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-10 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Top Posts</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">Popular stories</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {topPosts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-lg bg-card shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
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
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Subscribe</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Join our newsletter for a daily briefing of the top stories.
              </p>
              <form className="mt-5 flex flex-col gap-3">
                <label htmlFor="sidebar-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="sidebar-newsletter"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-border bg-background px-4 text-sm focus:border-brand focus:outline-none"
                />
                <button type="submit" className="h-12 rounded-full bg-brand px-5 font-display text-sm font-semibold text-brand-foreground hover:bg-brand/90">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Stay connected</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground">
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
]
