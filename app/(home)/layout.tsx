import type { ReactNode } from "react"
import { HomeLayout } from "fumadocs-ui/layouts/home"

import { baseOptions, linkItems } from "@/lib/layout.shared"

import { Footer } from "./layout.client"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        // {
        //   type: "custom",
        //   // only displayed on navbar, not mobile menu
        //   on: "nav",
        //   children: (
        //     <NavbarMenu>
        //       <NavbarMenuTrigger>Documentation</NavbarMenuTrigger>
        //       <NavbarMenuContent>
        //         <NavbarMenuLink href="/docs">Hello World</NavbarMenuLink>
        //       </NavbarMenuContent>
        //     </NavbarMenu>
        //   ),
        // },
        ...linkItems,
      ]}
    >
      {children}

      <Footer />
    </HomeLayout>
  )
}
