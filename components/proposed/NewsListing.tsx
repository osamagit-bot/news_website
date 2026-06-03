"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { articles, categories } from "@/lib/articles"
import ArticleCard from "@/components/proposed/ArticleCard"

const PAGE_SIZE = 6
const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort()

type SortKey = "newest" | "oldest" | "popular"

export default function NewsListing() {
  const [category, setCategory] = useState<string>("All")
  const [tag, setTag] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("newest")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = [...articles]
    if (category !== "All") list = list.filter((article) => article.category === category)
    if (tag !== "All") list = list.filter((article) => article.tags.includes(tag))
    const trimmedQuery = query.trim().toLowerCase()
    if (trimmedQuery) {
      list = list.filter(
        (article) =>
          article.title.toLowerCase().includes(trimmedQuery) ||
          article.excerpt.toLowerCase().includes(trimmedQuery),
      )
    }
    if (sort === "popular") list.sort((a, b) => b.comments - a.comments)
    else if (sort === "oldest") list.sort((a, b) => +new Date(a.date) - +new Date(b.date))
    else list.sort((a, b) => +new Date(b.date) - +new Date(a.date))
    return list
  }, [category, tag, query, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function resetPage<T>(setter: (value: T) => void) {
    return (value: T) => {
      setter(value)
      setPage(1)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "All",
              ...categories,
            ].map((categoryOption) => (
              <button
                key={categoryOption}
                onClick={() => resetPage(setCategory)(categoryOption)}
                className={`rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-colors ${
                  category === categoryOption
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-navy hover:bg-brand/10"
                }`}
              >
                {categoryOption}
              </button>
            ))}
          </div>

          <p className="mb-4 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-navy">{filtered.length}</span> article{filtered.length === 1 ? "" : "s"}
          </p>

          {pageItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {pageItems.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              No articles match your filters.
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={currentPage === 1}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={`h-10 w-10 rounded-full font-display text-sm font-semibold transition-colors ${
                    pageNumber === currentPage
                      ? "bg-navy text-navy-foreground"
                      : "border border-border text-navy hover:bg-secondary"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                disabled={currentPage === totalPages}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-navy">Search</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => resetPage(setQuery)(event.target.value)}
                placeholder="Search articles..."
                className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-navy">Sort By</h2>
            <select
              value={sort}
              onChange={(event) => resetPage(setSort)(event.target.value as SortKey)}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm focus:border-brand focus:outline-none"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="popular">Most commented</option>
            </select>
          </div>
        </aside>
      </div>
    </section>
  )
}