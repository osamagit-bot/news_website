import Image from "next/image"
import Link from "next/link"
import {
  CalendarDays,
  Clock,
  Facebook,
  MessageSquare,
  Twitter,
  Linkedin,
  Link2,
  User,
} from "lucide-react"
import type { Article } from "@/lib/articles"
import { getRelated } from "@/lib/articles"
import { CategoryBadge } from "@/components/category-badge"
import { ArticleCard } from "@/components/article-card"
import { SectionHeading } from "@/components/section-heading"

function slugify(c: string) {
  return c.toLowerCase().replace(/\s+/g, "-")
}

export function ArticleView({ article }: { article: Article }) {
  const related = getRelated(article, 3)

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-4">
        <CategoryBadge category={article.category} />
      </div>
      <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-navy sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <User className="h-4 w-4" /> {article.author}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" /> {article.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {article.readTime}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MessageSquare className="h-4 w-4" /> {article.comments} comments
        </span>
      </div>

      <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="space-y-5 text-base leading-relaxed text-foreground/90">
        <p className="text-lg font-medium text-navy">{article.excerpt}</p>
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Tags + share */}
      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-navy"
            >
              #{t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[Facebook, Twitter, Linkedin, Link2].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Share"
              className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Author box */}
      <div className="mt-8 flex items-center gap-4 rounded-2xl bg-surface p-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-bold text-navy-foreground">
          {article.author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <p className="font-display font-bold text-navy">{article.author}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Staff writer covering {article.category.toLowerCase()} for Newpress.
          </p>
        </div>
      </div>

      {/* Related */}
      <div className="mt-14">
        <SectionHeading title="Related Articles" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
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
