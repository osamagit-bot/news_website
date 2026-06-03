export type Article = {
  slug: string
  title: string
  excerpt: string
  category: Category
  author: string
  date: string
  readTime: string
  tags: string[]
  comments: number
  image: string
  featured?: boolean
  breaking?: boolean
  body: string[]
}

export const categories = [
  "Politics",
  "Business",
  "Sports",
  "Technology",
  "Entertainment",
  "Local News",
] as const

export type Category = (typeof categories)[number]

export const categoryMeta: Record<
  Category,
  { description: string; image: string }
> = {
  Politics: {
    description: "Elections, policy, and the decisions shaping public life.",
    image: "/images/education-grad.png",
  },
  Business: {
    description: "Markets, startups, and the economy explained.",
    image: "/images/workshop.png",
  },
  Sports: {
    description: "Scores, transfers, and the stories behind the game.",
    image: "/images/feature-concert.png",
  },
  Technology: {
    description: "Gadgets, AI, and the future of the digital world.",
    image: "/images/gaming-neon.png",
  },
  Entertainment: {
    description: "Film, music, and culture from around the globe.",
    image: "/images/hero-music.png",
  },
  "Local News": {
    description: "What's happening in your city and neighborhood.",
    image: "/images/feature-bridge.png",
  },
}

const body = [
  "The newsroom moved quickly this morning as details continued to emerge, with officials confirming the broad strokes while cautioning that the full picture would take time to assemble. Reporters on the ground described a measured but determined response.",
  "Analysts say the developments fit a wider pattern that has been building for months. They point to shifting priorities, new pressures on budgets, and a public that is paying closer attention than it has in years.",
  "\"We are watching this closely and will share what we learn as soon as we can verify it,\" a spokesperson said in a brief statement. Independent observers echoed the call for patience while urging transparency.",
  "What happens next depends on a handful of decisions expected in the coming days. For now, communities affected by the story are organizing, asking questions, and looking for clear answers from those in charge.",
  "Our team will keep updating this report as the situation evolves. Readers are encouraged to check back for verified updates rather than relying on early speculation circulating online.",
]

export const articles: Article[] = [
  {
    slug: "city-council-approves-transit-plan",
    title: "City Council Approves Sweeping Transit Plan After Late-Night Vote",
    excerpt:
      "A long-debated overhaul of public transport cleared its final hurdle, promising new routes and lower fares across the metro area.",
    category: "Local News",
    author: "Amara Okafor",
    date: "March 12, 2026",
    readTime: "6 min read",
    tags: ["Transit", "City Hall", "Budget"],
    comments: 147,
    image: "/images/feature-bridge.png",
    featured: true,
    breaking: true,
    body,
  },
  {
    slug: "global-markets-rally-on-rate-news",
    title: "Global Markets Rally as Central Banks Signal a Softer Path Ahead",
    excerpt:
      "Investors cheered hints of easing policy, sending major indexes to their best week in months.",
    category: "Business",
    author: "Daniel Reyes",
    date: "March 12, 2026",
    readTime: "5 min read",
    tags: ["Markets", "Economy", "Banking"],
    comments: 98,
    image: "/images/workshop.png",
    featured: true,
    breaking: true,
    body,
  },
  {
    slug: "national-team-clinches-final-spot",
    title: "National Team Clinches Final Spot in Dramatic Extra-Time Win",
    excerpt:
      "A late goal sent fans into a frenzy and booked a place in the championship decider.",
    category: "Sports",
    author: "Lena Hoffmann",
    date: "March 11, 2026",
    readTime: "4 min read",
    tags: ["Football", "Championship"],
    comments: 212,
    image: "/images/feature-concert.png",
    featured: true,
    breaking: true,
    body,
  },
  {
    slug: "ai-assistants-reshape-the-workplace",
    title: "AI Assistants Are Quietly Reshaping the Modern Workplace",
    excerpt:
      "From scheduling to code review, new tools are changing how teams spend their day.",
    category: "Technology",
    author: "Priya Nair",
    date: "March 11, 2026",
    readTime: "7 min read",
    tags: ["AI", "Future of Work", "Software"],
    comments: 64,
    image: "/images/gaming-neon.png",
    featured: true,
    body,
  },
  {
    slug: "festival-lineup-announced",
    title: "Summer Festival Lineup Announced With a Few Big Surprises",
    excerpt:
      "Organizers revealed headliners and a new second stage dedicated to emerging artists.",
    category: "Entertainment",
    author: "Marcus Bell",
    date: "March 10, 2026",
    readTime: "3 min read",
    tags: ["Music", "Festival", "Culture"],
    comments: 51,
    image: "/images/hero-music.png",
    body,
  },
  {
    slug: "parliament-debates-new-budget",
    title: "Parliament Debates New Budget Amid Calls for Tax Reform",
    excerpt:
      "Lawmakers clashed over spending priorities as the proposed budget headed to committee.",
    category: "Politics",
    author: "Sofia Marin",
    date: "March 10, 2026",
    readTime: "6 min read",
    tags: ["Budget", "Tax", "Policy"],
    comments: 87,
    image: "/images/education-grad.png",
    body,
  },
  {
    slug: "startups-bet-on-clean-energy",
    title: "Startups Bet Big on Clean Energy as Funding Returns",
    excerpt:
      "A wave of new investment is flowing into batteries, grids, and storage technology.",
    category: "Business",
    author: "Daniel Reyes",
    date: "March 9, 2026",
    readTime: "5 min read",
    tags: ["Startups", "Energy", "Investment"],
    comments: 33,
    image: "/images/feature-lake.png",
    body,
  },
  {
    slug: "marathon-record-falls",
    title: "City Marathon Record Falls on a Cool, Fast Morning",
    excerpt:
      "Thousands lined the streets to watch a course record tumble in the final mile.",
    category: "Sports",
    author: "Lena Hoffmann",
    date: "March 9, 2026",
    readTime: "4 min read",
    tags: ["Running", "Record"],
    comments: 42,
    image: "/images/hero-nature.png",
    body,
  },
  {
    slug: "new-phone-pushes-camera-limits",
    title: "New Flagship Phone Pushes the Limits of Computational Photography",
    excerpt:
      "Reviewers praise the camera while questioning whether the price is justified.",
    category: "Technology",
    author: "Priya Nair",
    date: "March 8, 2026",
    readTime: "6 min read",
    tags: ["Mobile", "Hardware", "Review"],
    comments: 76,
    image: "/images/fashion-palm.png",
    body,
  },
  {
    slug: "indie-film-wins-top-prize",
    title: "Indie Film Wins Top Prize and a Standing Ovation",
    excerpt:
      "A first-time director took home the festival's biggest award after a 10-minute ovation.",
    category: "Entertainment",
    author: "Marcus Bell",
    date: "March 8, 2026",
    readTime: "3 min read",
    tags: ["Film", "Awards"],
    comments: 29,
    image: "/images/lifestyle-masks.png",
    body,
  },
  {
    slug: "neighborhood-market-reopens",
    title: "Beloved Neighborhood Market Reopens After Year-Long Revamp",
    excerpt:
      "Local vendors return to a brighter space designed around community gathering.",
    category: "Local News",
    author: "Amara Okafor",
    date: "March 7, 2026",
    readTime: "4 min read",
    tags: ["Community", "Food", "Small Business"],
    comments: 38,
    image: "/images/food-soup.png",
    body,
  },
  {
    slug: "coalition-talks-continue",
    title: "Coalition Talks Continue as Parties Search for Common Ground",
    excerpt:
      "Negotiators reported progress on key issues but warned that hard choices remain.",
    category: "Politics",
    author: "Sofia Marin",
    date: "March 7, 2026",
    readTime: "5 min read",
    tags: ["Coalition", "Government"],
    comments: 61,
    image: "/images/gallery-3.png",
    body,
  },
  {
    slug: "small-business-grants-expand",
    title: "Small Business Grant Program Expands to Reach More Founders",
    excerpt:
      "The updated program lowers barriers and adds mentorship for first-time owners.",
    category: "Business",
    author: "Daniel Reyes",
    date: "March 6, 2026",
    readTime: "4 min read",
    tags: ["Small Business", "Grants"],
    comments: 22,
    image: "/images/gallery-4.png",
    body,
  },
  {
    slug: "rookie-signs-record-deal",
    title: "Rookie Sensation Signs Record Deal Ahead of New Season",
    excerpt:
      "The young athlete's signature is being called the steal of the off-season.",
    category: "Sports",
    author: "Lena Hoffmann",
    date: "March 6, 2026",
    readTime: "3 min read",
    tags: ["Transfers", "Season"],
    comments: 95,
    image: "/images/food-banana.png",
    body,
  },
  {
    slug: "open-source-tool-hits-milestone",
    title: "Popular Open-Source Tool Hits a Major Adoption Milestone",
    excerpt:
      "Maintainers credit a vibrant community for the project's rapid growth.",
    category: "Technology",
    author: "Priya Nair",
    date: "March 5, 2026",
    readTime: "5 min read",
    tags: ["Open Source", "Developers"],
    comments: 48,
    image: "/images/gallery-2.png",
    body,
  },
  {
    slug: "streaming-show-breaks-records",
    title: "Streaming Show Breaks Viewership Records in Opening Weekend",
    excerpt:
      "The new series became a cultural moment almost overnight, sparking endless debate.",
    category: "Entertainment",
    author: "Marcus Bell",
    date: "March 5, 2026",
    readTime: "4 min read",
    tags: ["TV", "Streaming"],
    comments: 110,
    image: "/images/gallery-1.png",
    body,
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getByCategory(category: Category) {
  return articles.filter((a) => a.category === category)
}

export function getRelated(article: Article, count = 3) {
  return articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(articles.filter((a) => a.category !== article.category))
    .slice(0, count)
}

export const breakingArticles = articles.filter((a) => a.breaking)
export const featuredArticles = articles.filter((a) => a.featured)
