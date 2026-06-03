import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MessageSquare, User } from "lucide-react"
import { CategoryBadge } from "@/components/category-badge"
import type { Article } from "@/lib/articles"

export function ArticleCard({
  article,
  orientation = "vertical",
}: {
  article: Article
  orientation?: "vertical" | "horizontal"
}) {
  if (orientation === "horizontal") {
    return (
      <article className="flex gap-4 rounded-xl border border-border bg-card p-3">
        <Link
          href={`/news/${article.slug}`}
          className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg"
        >
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="112px"
          />
        </Link>
        <div className="min-w-0">
          <Link
            href={`/category/${article.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xs font-bold uppercase tracking-wide text-brand"
          >
            {article.category}
          </Link>
          <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug text-navy">
            <Link href={`/news/${article.slug}`} className="hover:text-brand">
              {article.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{article.date}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <Link href={`/news/${article.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3">
          <CategoryBadge category={article.category} />
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-balance text-navy">
          <Link href={`/news/${article.slug}`} className="hover:text-brand">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <User className="h-3.5 w-3.5" /> {article.author}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" /> {article.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" /> {article.comments}
          </span>
        </div>
      </div>
    </article>
  )
}
