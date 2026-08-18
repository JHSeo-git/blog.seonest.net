import type { Metadata } from "next"
import { Noto_Serif_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"

import { ThemeToggle } from "@/components/theme-toggle"

import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
import "./globals.css"

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-noto-serif-kr",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://seonest.net"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "seonest",
    template: "%s | seonest",
  },
  description: "JHSeo 개발 블로그",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={notoSerifKR.variable}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-bg text-copy flex min-h-screen flex-col justify-between px-5 pt-10 pb-5 md:pt-14">
            <main className="mx-auto w-full max-w-[600px]">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="mt-16 flex items-center justify-center gap-4 font-sans">
      <a
        href="https://github.com/JHSeo-git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-nav hover:text-heading text-sm transition-colors duration-200"
      >
        github
      </a>
      <ThemeToggle />
    </footer>
  )
}
