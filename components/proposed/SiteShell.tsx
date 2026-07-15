"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Menu, Send, Twitter, X, Youtube, Zap } from "lucide-react"
import { articles, categories } from "@/lib/articles"
import type { ReactNode } from "react"
import api from "@/lib/api"


import {
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6"

import { useLanguage } from "@/context/LanguageContext"

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All News", href: "/news" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Newsletter", href: "/news" },
]

const gallery = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#", bg: "bg-[#3b5998]" },
  { icon: Instagram, label: "Instagram", href: "#", bg: "bg-[#c13584]" },
  { icon: Twitter, label: "Twitter", href: "#", bg: "bg-[#1da1f2]" },
  { icon: Linkedin, label: "LinkedIn", href: "#", bg: "bg-[#0a66c2]" },
]

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-")
}

function BreakingTicker() {
  const items = articles.filter((article) => article.breaking)
  const [index, setIndex] = useState(0)
  const [news , setNews] = useState([]);

  const {language} = useLanguage();

  useEffect(() => {
    if (items.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [items.length])

  if (items.length === 0) return null


  useEffect(() => {

    const fetchBreakingNews = async () => {
      try {
        const response = await api.get("/news/hero/")
        setNews(response.data)
        console.log(response.data)
       
      } catch (error) {
        console.error(error)
        setNews([])
      }
    }

    fetchBreakingNews();
  }, [language]);

  const showBreaking = news.length > 0 ? news : items;




  return (
    <div className="flex min-w-0 items-center gap-3 py-3 text-sm text-white/90">
      {/* <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-brand px-3 py-2 text-md font-semibold text-brand-foreground">
        <Zap className="h-3.5 w-3.5" />
        Breaking
      </span>
      <Link
        href={`/news/hero/${showBreaking[index].slug}`}
        className="truncate transition-colors duration-500 hover:text-white"
      >
        {showBreaking[index].title}
      </Link> */}
    </div>
  )
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg transition-all hover:bg-navy ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowRight className="h-5 w-5 rotate-90" />
    </button>
  )
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
const { language, setLanguage } = useLanguage();
  // Prevent body scroll when mobile menu is open
 useEffect(() => {
  if (open) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
  } else {
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  }

  return () => {
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  }
}, [open])

  useEffect(() => {
    if (open) {
      setShowOverlay(true)
      const timer = setTimeout(() => {
        setShowMenu(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowMenu(false)
      setTimeout(() => {
        setShowOverlay(false)
      }, 300)
    }
  }, [open])

  const closeMenu = () => {
    setShowMenu(false)
    setTimeout(() => {
      setShowOverlay(false)
      setOpen(false)
      setOpenDropdown(null)
    }, 300)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top header - hidden on mobile */}
      <div className="hidden md:block bg-navy text-royal-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <BreakingTicker />
          <div className="hidden items-center gap-2 md:flex">
            <span className="flex items-center gap-2 px-4 text-sm">
              19° C Mumbai
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 text-sm">
              Monday, 07 March, 2021
            </span>
    <div className="lang-switch">
  <button
    type="button"
    onClick={() => setLanguage("en")}
    className="lang-btn"
  >
    EN
  </button>

  <button
    type="button"
    onClick={() => setLanguage("fa")}
    className="lang-btn"
  >
    فارسی
  </button>
</div>
          </div>
        </div>
      </div>

  <header className="sticky top-0 z-[99999] bg-background/95 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-xl font-bold text-navy">
            Newpress
          </Link>

          <nav className="hidden items-center lg:p-5 gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1.5 font-display text-md font-medium text-navy transition-colors hover:text-brand"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Social icons - hidden on mobile */}
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              <a
                href="#"
                aria-label="YouTube"
                className="group grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-neutral-700 transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="group grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-neutral-700 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="group grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-neutral-700 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="group grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-neutral-700 transition-all duration-300 hover:scale-110 hover:bg-sky-500 hover:text-white"
              >
                <FaTelegram className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Dark Overlay */}
        {(open || showOverlay) && (
          <div
            className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-700 ease-in-out ${
              showOverlay ? "opacity-50" : "opacity-0"
            }`}
            style={{
              transform: showOverlay ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu Slide-in from Right */}
      <div
  className={`fixed top-0 right-0  h-full w-full max-w-sm bg-navy shadow-2xl z-[9999] lg:hidden transform transition-transform duration-700 ease-in-out overflow-hidden ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full  overflow-y-auto">
            {/* Logo and Close Button */}
            <div className="flex items-center border-b border-blue-900 p-3 justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Link href="/" className="font-display text-xl font-bold text-white">
                  Newpress
                </Link>
              </div>
              <button
                onClick={closeMenu}
                className="text-white transition-colors hover:opacity-80"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

        

            {/* Navigation Links with Dropdown Support */}
            <div className="space-y-2 mb-6 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-white hover:text-brand transition-colors font-medium py-3 "
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Get Quote / Contact Button */}
            <a
              href="/contact"
              onClick={closeMenu}
              className="relative block w-full px-6 py-4 rounded-sm font-medium mb-6 overflow-hidden group border border-brand text-white hover:bg-brand transition-all duration-300 text-center"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Contact Us
              </span>
            </a>

            {/* Social Media Icons */}
          <div className="border-t border-white/10 pt-6 mt-8">
  <h3 className="mb-4 text-sm font-semibold text-white">
    Follow Us
  </h3>

  <div className="flex gap-3">
    <a
      href="#"
      aria-label="Facebook"
      className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]"
    >
      <FaFacebookF className="h-4 w-4" />
    </a>

  

    <a
      href="#"
      aria-label="X"
      className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
    >
      <FaXTwitter className="h-4 w-4" />
    </a>

    <a
      href="#"
      aria-label="Telegram"
      className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500"
    >
      <FaTelegram className="h-4 w-4" />
    </a>

    <a
      href="#"
      aria-label="YouTube"
      className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000]"
    >
      <FaYoutube className="h-4 w-4" />
    </a>
  </div>
</div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="font-display text-2xl font-bold text-navy">
                Newpress
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Trusted news, sharp reporting, and thoughtful commentary from around the world.
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
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${slugify(category)}`}
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-display text-xl font-bold text-navy">Gallery</h4>
              <div className="grid grid-cols-2 gap-3">
                {gallery.map((src, index) => (
                  <a key={index} href="#" className="overflow-hidden rounded-md">
                    <img src={src || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} className="h-24 w-full object-cover transition-transform duration-500 hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy text-navy-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
            <p className="text-sm text-white/80">Copyright © 2026 Newpress. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} className={`grid h-9 w-9 place-items-center rounded-md text-white ${item.bg}`}>
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </div>
  )
}