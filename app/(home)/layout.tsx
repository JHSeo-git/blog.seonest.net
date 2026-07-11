import type { ReactNode } from "react"
import { HomeLayout } from "fumadocs-ui/layouts/home"
import { Sparkles } from "lucide-react"

import { baseOptions, linkItems } from "@/lib/layout.shared"

import { Footer } from "./layout.client"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <Sparkles />,
          text: "Documentation",
          url: "/docs",
          active: "nested-url",
        },
        ...linkItems,
      ]}
    >
      {children}

      <Footer />
    </HomeLayout>
  )
}
