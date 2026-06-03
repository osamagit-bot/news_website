"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Zap } from "lucide-react"
import { breakingArticles } from "@/lib/articles"

export function BreakingTicker() {
  const items = breakingArticles
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4000)
    return () => clearInterval(id)
  }, [items.length])

  if (items.length === 0) return null

  return (
    <div className="flex min-w-0 items-center gap-3 py-3">
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
        <Zap className="h-3.5 w-3.5" />
        Breaking
      </span>
      <Link
        key={items[index].slug}
        href={`/news/${items[index].slug}`}
        className="animate-in fade-in slide-in-from-bottom-1 truncate text-sm text-white/90 transition-colors duration-500 hover:text-white"
      >
        {items[index].title}
      </Link>
    </div>
  )
}
