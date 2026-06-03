import {
  SiteShell,
  Hero,
  FeaturedPosts,
  CategoriesOverview,
  TopStories,
  TopPosts,
  RecentPosts,
  NewsletterCta,
} from "@/components/proposed"

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <FeaturedPosts />
      <CategoriesOverview />
   
      <NewsletterCta />
    </SiteShell>
  )
}
