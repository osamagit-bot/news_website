import type { Metadata } from "next"
import { SiteShell, PageHero, NewsListing, NewsletterCta } from "@/components/proposed"

export const metadata: Metadata = {
  title: "All News — Newpress",
  description: "Browse every story, filter by category and tag, and find what matters to you.",
}

export default function NewsPage() {
  return (
    <SiteShell>
      <PageHero
        title="All News"
        description="Every story from the newsroom, filterable by category, tag, and popularity."
        crumbs={[{ label: "News" }]}
      />
      <NewsListing />
      <NewsletterCta />
    </SiteShell>
  )
}
