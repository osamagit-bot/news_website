import { Mail } from "lucide-react"

export function NewsletterCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-navy px-6 py-10 text-center text-navy-foreground sm:px-12">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground">
            <Mail className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Never Miss a Headline
            </h2>
            <p className="mx-auto mt-2 max-w-md text-pretty leading-relaxed text-navy-foreground/70">
              Subscribe to our daily briefing and get the stories that matter
              delivered straight to your inbox.
            </p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-transparent bg-white/10 px-5 text-sm text-navy-foreground placeholder:text-navy-foreground/50 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-brand px-7 font-display text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
