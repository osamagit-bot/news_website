import { Clock } from "lucide-react"

const topStoriesMain = [
  {
    id: "ts1",
    title: "3 Technology Basics You Reviewing Constantly.",
    category: "Fashion",
    image: "/images/fashion-palm.png",
  },
  {
    id: "ts2",
    title: "Best friends in high school life. I miss all time.",
    category: "Education",
    image: "/images/education-grad.png",
  },
]

const topStoriesList = [
  {
    id: "tl1",
    title: "This Not Just A Photo But It Best",
    category: "Music",
    date: "12 March, 2021",
    image: "/images/hero-music.png",
  },
  {
    id: "tl2",
    title: "We have to keep every chapter",
    category: "Lifestyle",
    date: "12 March, 2021",
    image: "/images/feature-lake.png",
  },
  {
    id: "tl3",
    title: "Never eat extra fatty foods",
    category: "Food",
    date: "12 March, 2021",
    image: "/images/food-soup.png",
  },
  {
    id: "tl4",
    title: "Camping trips that change you",
    category: "Travel",
    date: "12 March, 2021",
    image: "/images/hero-nature.png",
  },
]

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
      {category}
    </span>
  )
}

export default function TopStories() {
  return (
    <section className="bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Top Stories</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">The stories trending now</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {topStoriesMain.map((post) => (
            <article key={post.id} className="group relative h-80 overflow-hidden rounded-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

          <div className="flex flex-col gap-4">
            {topStoriesList.map((post) => (
              <article key={post.id} className="flex items-center gap-4 rounded-lg bg-card p-3 shadow-sm transition-shadow hover:shadow-md">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-20 w-24 shrink-0 rounded-md object-cover" />
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
