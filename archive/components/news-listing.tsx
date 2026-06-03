"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { articles, categories } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"

const PAGE_SIZE = 6
const allTags = Array.from(new Set(articles.flatMap((a) => a.tags))).sort()

type SortKey = "newest" | "oldest" | "popular"

export function NewsListing() {
  const [category, setCategory] = useState<string>("All")
  const [tag, setTag] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("newest")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = [...articles]
    if (category !== "All") list = list.filter((a) => a.category === category)
    if (tag !== "All") list = list.filter((a) => a.tags.includes(tag))
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q),
      )
    }
    if (sort === "popular") list.sort((a, b) => b.comments - a.comments)
    else if (sort === "oldest")
      list.sort((a, b) => +new Date(a.date) - +new Date(b.date))
    else list.sort((a, b) => +new Date(b.date) - +new Date(a.date))
    return list
  }, [category, tag, query, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const pageItems = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  function resetPage<T>(setter: (v: T) => void) {
    return (v: T) => {
      setter(v)
      setPage(1)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          {/* Category pills */}
          <div className="mb-6 flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => resetPage(setCategory)(c)}
                className={`rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-colors ${
                  category === c
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-navy hover:bg-brand/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="mb-4 text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-navy">{filtered.length}</span>{" "}
            article{filtered.length === 1 ? "" : "s"}
          </p>

          {pageItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {pageItems.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No articles match your filters.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-10 flex items-center justify-center gap-2"
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={current === 1}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  aria-current={p === current ? "page" : undefined}
                  className={`h-10 w-10 rounded-full font-display text-sm font-semibold transition-colors ${
                    p === current
                      ? "bg-navy text-navy-foreground"
                      : "border border-border text-navy hover:bg-secondary"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={current === totalPages}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>

        {/* Sidebar filters */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-navy">
              Search
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => resetPage(setQuery)(e.target.value)}
                placeholder="Search articles..."
                className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-navy">
              Sort By
            </h2>
            <select
              value={sort}
              onChange={(e) => resetPage(setSort)(e.target.value as SortKey)}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm focus:border-brand focus:outline-none"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="popular">Most commented</option>
            </select>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-navy">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {["All", ...allTags].map((t) => (
                <button
                  key={t}
                  onClick={() => resetPage(setTag)(t)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    tag === t
                      ? "bg-brand text-brand-foreground"
                      : "bg-secondary text-navy hover:bg-brand/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
