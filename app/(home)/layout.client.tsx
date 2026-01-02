"use client"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-muted-foreground border-t py-4 text-center">
      <p className="text-fd-muted-foreground text-xs">
        © {year} Seonest. built with
        <a
          href="https://www.fumadocs.dev/"
          className="text-fd-info ml-0.5 hover:underline"
          target="_blank"
        >
          fumadocs
        </a>
      </p>
    </footer>
  )
}
