import Link from "next/link"
import { Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { Logo } from "@/components/logo"
import { categories } from "@/lib/articles"

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "All News", href: "/news" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Newsletter", href: "/news" },
]

const popularPosts = categories.map((c) => ({
  label: c,
  href: `/category/${c.toLowerCase().replace(/\s+/g, "-")}`,
}))

const gallery = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Vestibulum accumsan purus tellus. Fusce luctus daferst luctus nibh, at finibus turpis
              tincidunt sed.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-brand text-brand-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div className="text-sm text-navy">
                <p>info@example.com</p>
                <p>help@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-xl font-bold text-navy">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-brand">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-xl font-bold text-navy">Categories</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {popularPosts.map((link) => (
                <Link key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-brand">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-xl font-bold text-navy">Our Gallery</h4>
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((src, i) => (
                <a key={i} href="#" className="overflow-hidden rounded-md">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${i + 1}`}
                    className="h-24 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/80">
            Copyright &copy; 2021 Newpress. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md bg-[#3b5998] text-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md bg-[#c13584] text-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md bg-[#1da1f2] text-white">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
