import type { Metadata } from "next"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { SiteShell, PageHero, ContactForm } from "@/components/proposed"

export const metadata: Metadata = {
  title: "Contact Us — Newpress",
  description: "Get in touch with the Newpress newsroom by email, phone, or our contact form.",
}

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "newsroom@newpress.com",
    href: "mailto:newsroom@newpress.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0148",
    href: "tel:+12125550148",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "240 Press Avenue, Suite 12, New York, NY 10001",
  },
]

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
]

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        title="Contact Us"
        description="Have a tip, a question, or feedback? We'd love to hear from you."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and the right team will get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-brand"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {d.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-navy p-6 text-navy-foreground">
              <p className="font-display text-sm font-bold uppercase tracking-wide">
                Follow us
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Newpress office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0100%2C40.7050%2C-73.9900%2C40.7200&layer=mapnik"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteShell>
  )
}
