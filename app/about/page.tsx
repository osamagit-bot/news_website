import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, ShieldCheck, Users } from "lucide-react"
import { SiteShell, PageHero, NewsletterCta } from "@/components/proposed"

export const metadata: Metadata = {
  title: "About Us — Newpress",
  description:
    "Learn about Newpress, our mission, our editorial policy, and the team behind the newsroom.",
}

const stats = [
  { value: "12+", label: "Years reporting" },
  { value: "180", label: "Stories monthly" },
  { value: "2.4M", label: "Monthly readers" },
  { value: "40", label: "Journalists" },
]

const team = [
  { name: "Amara Okafor", role: "Editor-in-Chief", image: "/images/gallery-1.png" },
  { name: "Daniel Reyes", role: "Business Editor", image: "/images/gallery-2.png" },
  { name: "Lena Hoffmann", role: "Sports Editor", image: "/images/gallery-4.png" },
  { name: "Priya Nair", role: "Technology Editor", image: "/images/gallery-3.png" },
]



export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        title="About Newpress"
        description="An independent newsroom committed to clear, accurate, and fearless reporting."
        crumbs={[{ label: "About Us" }]}
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/workshop.png"
              alt="The Newpress newsroom at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-wide text-brand">
              Who we are
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-balance text-navy">
              Journalism that puts readers before headlines
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Newpress was founded on a simple belief: communities deserve
              reporting they can trust. From city hall to global markets, our
              reporters dig past the noise to bring you the context behind the
              news.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We are reader-funded and fiercely independent, which means our only
              obligation is to the truth and the people we serve.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl bg-navy p-8 text-center text-navy-foreground sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-navy-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-navy">
              Our Mission
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To deliver accurate, timely, and accessible journalism that empowers
              people to make informed decisions about their lives and communities.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-royal text-royal-foreground">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-navy">
              Our Vision
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              A world where everyone has access to trustworthy information and
              where journalism strengthens, rather than divides, communities.
            </p>
          </div>
        </div>
      </section>

    
      {/* Team */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">Meet the Team</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">The people behind every story</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={m.image || "/placeholder.svg"}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 font-display font-bold text-navy">{m.name}</h3>
                <p className="text-sm text-brand">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCta />
    </SiteShell>
  )
}
