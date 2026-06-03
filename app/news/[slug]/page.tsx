import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell, PageHero, ArticleView } from "@/components/proposed"
import { articles, getArticle } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: "Article not found — Newpress" }
  return {
    title: `${article.title} — Newpress`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <SiteShell>
      <PageHero
        title={article.category}
        crumbs={[
          { label: "News", href: "/news" },
          { label: article.category, href: `/category/${article.category.toLowerCase().replace(/\s+/g, "-")}` },
          { label: "Article" },
        ]}
      />
      <ArticleView article={article} />
    </SiteShell>
  )
}
