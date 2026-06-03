import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-brand to-royal">
        <span className="font-display text-lg font-extrabold leading-none text-white">N</span>
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight text-navy">
        Newpress
      </span>
    </Link>
  )
}
