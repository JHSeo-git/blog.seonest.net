import type { ReactNode } from "react"
import Link from "next/link"
import { HomeLayout } from "fumadocs-ui/layouts/home"
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar"
import { Bot, Sparkles } from "lucide-react"

import { baseOptions, linkItems } from "@/lib/layout.shared"

import { Footer } from "./layout.client"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [
            {
              text: "Get Started",
              url: "/docs",
              icon: <Sparkles />,
            },
            {
              text: "Claude Code",
              url: "/docs/claude-code",
              icon: <Bot />,
            },
          ],
        },
        {
          type: "custom",
          // only displayed on navbar, not mobile menu
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs">
                  <Sparkles className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                  <p className="font-medium">Get started</p>
                  <p className="text-fd-muted-foreground text-sm">Getting started with Seonest.</p>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/claude-code">
                  <Bot className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                  <p className="font-medium">Claude Code</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Claude Code for Agent-based development
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
    >
      {children}

      <Footer />
    </HomeLayout>
  )
}
