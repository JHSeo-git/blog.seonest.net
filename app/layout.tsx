import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { RootProvider } from "fumadocs-ui/provider/next"

import { baseUrl, createMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import GoogleAnalytics from "@/components/google-analytics"

export const metadata: Metadata = createMetadata({
  metadataBase: baseUrl,
  title: {
    template: "%s | Seonest",
    default: "Seonest",
  },
  description: "The site by Seonest",
  verification: {
    google: "RjVCFQ8Ye2KJxwjzcLX82cGsxOLxH1mhaUvLx5SC6I4",
  },
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className={cn(
        "scroll-smooth antialiased motion-reduce:scroll-auto",
        geist.variable,
        mono.variable
      )}
      suppressHydrationWarning
    >
      <head />
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>

        {process.env.NODE_ENV === "production" && (
          <>
            <GoogleAnalytics />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}

export default RootLayout
