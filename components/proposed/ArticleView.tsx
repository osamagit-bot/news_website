import Link from "next/link"
import { Clock, Facebook, Linkedin, MessageSquare, Twitter, User, Eye } from "lucide-react"
import { getRelated, type Article } from "@/lib/articles"
import ArticleCard from "@/components/proposed/ArticleCard"

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-")
}

export default function ArticleView({ article }: { article: Article }) {
  const related = getRelated(article, 3)

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
        {article.category}
      </div>
      <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-navy sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {article.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Eye className="h-4 w-4" /> {article.views || article.reads || article.told || 87} views
        </span>
      </div>

      <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <img src={article.image || "/placeholder.svg"} alt={article.title} className="h-full w-full object-cover" />
      </div>

      <div className="space-y-5 text-base leading-relaxed text-foreground/90">
        <p className="text-lg font-medium text-navy">{article.excerpt}</p>
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-navy">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[Facebook, Twitter, Linkedin].map((Icon, index) => (
            <a key={index} href="#" aria-label="Share" className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl font-bold uppercase tracking-wide text-brand">Related Articles</p>

          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/category/${slugify(article.category)}`}
          className="inline-flex rounded-full bg-navy px-6 py-3 font-display text-sm font-semibold text-navy-foreground transition-colors hover:bg-brand"
        >
          More in {article.category}
        </Link>
      </div>
    </article>
  )
}