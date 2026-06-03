export type Post = {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  comments?: number
  image: string
}

export const heroPosts: Post[] = [
  {
    id: "h1",
    title: "Pick The Best Travel Guide Book To Enjoy With Travel",
    excerpt: "",
    category: "Fashion",
    author: "Johen Doe",
    date: "12 March, 2021",
    comments: 147,
    image: "/images/hero-travel.png",
  },
  {
    id: "h2",
    title: "Essential Things For A Successful Music Festival",
    excerpt: "",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    comments: 98,
    image: "/images/hero-music.png",
  },
  {
    id: "h3",
    title: "How Nature Walks Reset Your Mind And Mood",
    excerpt: "",
    category: "Travel",
    author: "Johen Doe",
    date: "12 March, 2021",
    comments: 64,
    image: "/images/hero-nature.png",
  },
]

export const featuredPosts: Post[] = [
  {
    id: "f1",
    title: "Guide to Picking the Best Travel Card",
    excerpt: "",
    category: "Travel",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-bridge.png",
  },
  {
    id: "f2",
    title: "If you want to find your life, you go to nature.",
    excerpt: "",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-lake.png",
  },
  {
    id: "f3",
    title: "Try to be happy all the time no matter.",
    excerpt: "",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-concert.png",
  },
]

export const topStoriesMain: Post[] = [
  {
    id: "ts1",
    title: "3 Technology Basics You Reviewing Constantly.",
    excerpt: "",
    category: "Fashion",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/fashion-palm.png",
  },
  {
    id: "ts2",
    title: "Best friends in high school life. I miss all time.",
    excerpt: "",
    category: "Education",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/education-grad.png",
  },
]

export const topStoriesList: Post[] = [
  {
    id: "tl1",
    title: "This Not Just A Photo But It Best",
    excerpt: "",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/hero-music.png",
  },
  {
    id: "tl2",
    title: "We have to keep every chapter",
    excerpt: "",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/feature-lake.png",
  },
  {
    id: "tl3",
    title: "Never eat extra fatty foods",
    excerpt: "",
    category: "Food",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/food-soup.png",
  },
  {
    id: "tl4",
    title: "Camping trips that change you",
    excerpt: "",
    category: "Travel",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/hero-nature.png",
  },
]

export const topPosts: Post[] = [
  {
    id: "tp1",
    title: "Los angeles compound he is trying to sell",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/lifestyle-masks.png",
  },
  {
    id: "tp2",
    title: "How to Make Choreg Armenia's Eggy",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Food",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/food-banana.png",
  },
  {
    id: "tp3",
    title: "The sound that defined a generation",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Music",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/hero-music.png",
  },
  {
    id: "tp4",
    title: "Graduation day memories that last",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vel hendrerit.",
    category: "Education",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/education-grad.png",
  },
]

export const recentPosts: Post[] = [
  {
    id: "r1",
    title: "Quick Simple and Downright Comforting Dishes for Busy Weeknights",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Food",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/food-soup.png",
  },
  {
    id: "r2",
    title: "Make a beauty selfie 2020: new life to go, a short the story across the world",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/lifestyle-masks.png",
  },
  {
    id: "r3",
    title: "New ways to live your game life all the way around",
    excerpt: "Integer nibh libero, luctus id dolor vel, euismod volutpat dolor. Suspendisse dignissim id arcu ut sollicitudin.",
    category: "Gaming",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/gaming-neon.png",
  },
]

export const mostLoved: Post[] = [
  {
    id: "ml1",
    title: "The craftsmen who keep tradition alive",
    excerpt: "",
    category: "Lifestyle",
    author: "Johen Doe",
    date: "12 March, 2021",
    image: "/images/workshop.png",
  },
]
