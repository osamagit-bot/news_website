"use client"

import { useState } from "react"
import { User, Clock, MessageSquare, Flame, ChevronLeft, ChevronRight } from "lucide-react"
import { heroPosts } from "@/lib/posts"

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const total = heroPosts.length
  const post = heroPosts[active]
  const prev = heroPosts[(active - 1 + total) % total]
  const next = heroPosts[(active + 1) % total]

  return (
    <section className="bg-background py-6">
      <div className="relative">
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] lg:gap-0">
          {/* peek left */}
          <button
            onClick={() => setActive((active - 1 + total) % total)}
            className="relative hidden h-[460px] overflow-hidden lg:block"
            aria-label="Previous slide"
          >
            <img
              src={prev.image || "/placeholder.svg"}
              alt={prev.title}
              className="h-full w-full object-cover opacity-90"
            />
            <span className="absolute inset-0 bg-navy/30" />
          </button>

          {/* main */}
          <article className="relative h-[460px] overflow-hidden lg:mx-3 lg:rounded-lg">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  <Flame className="h-4 w-4 text-brand" />
                  Trending
                </span>
              </div>
              <h1 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {post.comments} Comments
                </span>
              </div>
            </div>
          </article>

          {/* peek right */}
          <button
            onClick={() => setActive((active + 1) % total)}
            className="relative hidden h-[460px] overflow-hidden lg:block"
            aria-label="Next slide"
          >
            <img
              src={next.image || "/placeholder.svg"}
              alt={next.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/20" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="rounded bg-amber-400 px-2.5 py-1 text-xs font-bold uppercase text-navy">
                {next.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white">
                {next.title}
              </h2>
            </div>
          </button>
        </div>

        {/* controls */}
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-center gap-3 px-4">
          <button
            onClick={() => setActive((active - 1 + total) % total)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {heroPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-brand" : "w-2.5 bg-navy/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((active + 1) % total)}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
