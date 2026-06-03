import { Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from "lucide-react"
import { mostLoved } from "@/lib/posts"
import { CategoryBadge } from "@/components/category-badge"

export function SubscribeWidget() {
  return (
    <div className="rounded-lg border-2 border-dashed border-brand p-8 text-center">
      <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary text-navy">
        <Mail className="h-6 w-6" />
      </span>
      <h3 className="font-display text-2xl font-extrabold text-navy">Subscribe Now !</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
        No spam, notifications only about new products, updates
      </p>
      <form className="mt-5 flex overflow-hidden rounded-md border border-border">
        <input
          type="email"
          required
          placeholder="Your email ..."
          className="min-w-0 flex-1 bg-secondary px-4 py-3 text-sm text-navy outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-navy"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

const socials = [
  { name: "Facebook", Icon: Facebook, color: "bg-[#3b5998]" },
  { name: "Instagram", Icon: Instagram, color: "bg-[#c13584]" },
  { name: "Twitter", Icon: Twitter, color: "bg-[#1da1f2]" },
  { name: "Pinterest", Icon: Heart, color: "bg-[#bd081c]" },
  { name: "Linkedin", Icon: Linkedin, color: "bg-[#0077b5]" },
  { name: "Youtube", Icon: Youtube, color: "bg-[#ff0000]" },
]

export function SocialWidget() {
  return (
    <div>
      <h3 className="mb-5 font-display text-2xl font-extrabold text-navy">Social Link</h3>
      <div className="grid grid-cols-2 gap-3">
        {socials.map(({ name, Icon, color }) => (
          <a
            key={name}
            href="#"
            aria-label={name}
            className={`flex h-14 items-center justify-center rounded-md text-white transition-opacity hover:opacity-90 ${color}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  )
}

export function AdWidget() {
  return (
    <a href="#" className="block overflow-hidden rounded-lg">
      <img
        src="/images/ad-banner.png"
        alt="Black Friday sale advertising banner"
        className="h-auto w-full"
      />
    </a>
  )
}

export function MostLovedWidget() {
  const post = mostLoved[0]
  return (
    <div>
      <h3 className="mb-5 font-display text-2xl font-extrabold text-navy">Most Loved</h3>
      <article className="group overflow-hidden rounded-lg">
        <div className="relative h-56 overflow-hidden rounded-lg">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
          <div className="absolute left-4 top-4">
            <CategoryBadge category={post.category} />
          </div>
          <h4 className="absolute inset-x-0 bottom-0 p-4 font-display text-lg font-bold leading-snug text-white">
            <a href="#" className="transition-colors hover:text-brand">
              {post.title}
            </a>
          </h4>
        </div>
      </article>
    </div>
  )
}
