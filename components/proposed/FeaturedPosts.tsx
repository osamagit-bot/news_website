import { User, Clock } from "lucide-react"
import React from "react"

const featuredPosts = [
  {
    id: "f1",
    title: "Guide to Picking the Best Travel Card",
    excerpt: "",
    category: "Travel",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-bridge.png",
  },
  {
    id: "f2",
    title: "If you want to find your life, you go to nature.",
    excerpt: "",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-lake.png",
  },
  {
    id: "f3",
    title: "Try to be happy all the time no matter.",
    excerpt: "",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-concert.png",
  },
]

export default function FeaturedPosts() {
  return (
   <section className="bg-background py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="mb-10 font-display text-3xl lg:text-5xl font-bold tracking-tight">
      Latest <span className="text-brand">News</span>

    </h2>

    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {featuredPosts.map((post) => (
        <article key={post.id} className="group">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={post.image}
              alt={post.title}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-125"
            />

            {/* Category */}
            <span className="absolute left-5 top-5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {post.category}
            </span>
          </div>

          {/* Floating Content Card */}
          <div className="relative z-10 mx-5 -mt-16 rounded-2xl bg-white p-6 ">
            <h3 className="font-display text-xl font-bold leading-snug text-gray-900">
              <a href="#" className="transition-colors hover:text-brand">
                {post.title}
              </a>
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-brand" />
                {post.author}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
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