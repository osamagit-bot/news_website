export function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded bg-tag px-3 py-1 text-xs font-bold uppercase tracking-wide text-tag-foreground">
      {category}
    </span>
  )
}
