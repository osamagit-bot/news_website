import { CloudSun, CalendarDays } from "lucide-react"
import { BreakingTicker } from "@/components/breaking-ticker"

export function TopBar() {
  return (
    <div className="bg-royal text-royal-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BreakingTicker />
        <div className="hidden items-stretch md:flex">
          <span className="flex items-center gap-2 px-5 text-sm text-white/90">
            <CloudSun className="h-4 w-4" />
            19&deg; C Mumbai
          </span>
          <span className="flex items-center gap-2 bg-white/10 px-5 py-3 text-sm text-white/90">
            <CalendarDays className="h-4 w-4" />
            Monday, 07 March, 2021
          </span>
        </div>
      </div>
    </div>
  )
}
