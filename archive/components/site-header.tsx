"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Search, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors hover:text-brand"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
          <button
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white transition-colors hover:bg-brand"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 font-display text-sm font-semibold text-navy"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
