import "@/styles/globals.css"

import type { Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import GoogleAnalytics from "@/components/google-analytics"
import { Header } from "@/components/header"
import Providers from "@/components/providers"

export const metadata = {
  metadataBase: new URL("https://seonest.net"),
  title: {
    default: "Seonest",
    template: "%s | Seonest",
  },
  description: "JHSeo 개발 블로그",
  openGraph: {
    title: {
      default: "Seonest",
      template: "%s | Seonest",
    },
    description: "JHSeo 개발 블로그",
    images: [{ url: "/opengraph-image.png", alt: "Seonest" }],
    type: "website",
    url: "https://seonest.net",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Seonest",
      template: "%s | Seonest",
    },
    description: "JHSeo 개발 블로그",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "RjVCFQ8Ye2KJxwjzcLX82cGsxOLxH1mhaUvLx5SC6I4",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className="scroll-smooth antialiased motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container min-w-[360px] flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
