export function Callout({
  title,
  children,
}: {
  title?: string
  type?: string
  children: React.ReactNode
}) {
  return (
    <div className="border-l-seonest-primary mb-6 border-l-2 pl-4 text-[13px] [&_p]:mb-3 [&_p:last-child]:mb-0">
      {title && <p className="text-nav mb-2 font-sans text-[13px] font-medium">{title}</p>}
      {children}
    </div>
  )
}
