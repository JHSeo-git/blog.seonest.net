import { createFromSource } from "fumadocs-core/search/server"

import { blog } from "@/lib/source"

export const { GET } = createFromSource(blog, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english",
})
