import type { ReactNode } from "react"
import { TopBar } from "@/components/top-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
