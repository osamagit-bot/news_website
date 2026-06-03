import Link from "next/link"
import { Calendar, MessageCircle, Eye } from "lucide-react"
import type { Article } from "@/lib/articles"

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-")
}

export default function ArticleCard({
  article,
}: {
  article: Article
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <Link href={`/news/${article.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground">
          {article.category}
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
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
   
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {article.views || article.reads || article.told || 87}
          </span>
        </div>
      </div>
    </article>
  )
}