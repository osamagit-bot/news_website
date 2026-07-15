"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import ArticleCard from "@/components/proposed/ArticleCard";
import api from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

const PAGE_SIZE = 6;

type News = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  published_at: string;
  published_by: string;
  is_hero: boolean;
};

type SortKey = "newest" | "oldest";

export default function NewsListing() {
  const { language } = useLanguage();

  const [news, setNews] = useState<News[]>([]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/news/")

        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [language]);

  const categories = useMemo(
    () => ["All", ...new Set(news.map((item) => item.category))],
    [news]
  );

  const filtered = useMemo(() => {
    let list = [...news];

    if (category !== "All") {
      list = list.filter((item) => item.category === category);
    }

    if (query.trim()) {
      const q = query.toLowerCase();

      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    if (sort === "oldest") {
      list.reverse();
    }

    return list;
  }, [news, category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function resetPage<T>(setter: (value: T) => void) {
    return (value: T) => {
      setter(value);
      setPage(1);
    };
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => resetPage(setCategory)(item)}
                className={`rounded-full px-4 py-1.5 font-display text-sm font-semibold ${
                  category === item
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="mb-4 text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-navy">
              {filtered.length}
            </span>{" "}
            articles
          </p>

          {pageItems.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {pageItems.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-12 text-center">
              No articles found.
            </div>
          )}

          {totalPages > 1 && (
            <nav className="mt-10 flex justify-center gap-2">
              <button
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={currentPage === 1}
                className="grid h-10 w-10 place-items-center rounded-full border"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`h-10 w-10 rounded-full ${
                    currentPage === i + 1
                      ? "bg-navy text-white"
                      : "border"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="grid h-10 w-10 place-items-center rounded-full border"
              >
                <ChevronRight size={18} />
              </button>
            </nav>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border bg-card p-5">
            <h2 className="mb-3 text-sm font-bold uppercase">
              Search
            </h2>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />

              <input
                value={query}
                onChange={(e) =>
                  resetPage(setQuery)(e.target.value)
                }
                placeholder="Search news..."
                className="h-11 w-full rounded-lg border pl-9 pr-3"
              />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h2 className="mb-3 text-sm font-bold uppercase">
              Sort
            </h2>

            <select
              value={sort}
              onChange={(e) =>
                resetPage(setSort)(e.target.value as SortKey)
              }
              className="h-11 w-full rounded-lg border px-3"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </aside>
      </div>
    </section>
  );
}