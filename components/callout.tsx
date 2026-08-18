export function Callout({
  title,
  children,
}: {
  title?: string
  type?: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-surface-subtle border-line-subtle mb-6 rounded-lg border px-4 py-3 text-[0.9375em] [&_p]:mb-3 [&_p:last-child]:mb-0">
      {title && <p className="text-heading font-medium">{title}</p>}
      {children}
    </div>
  )
}
