import { createSearchAPI } from "fumadocs-core/search/server"

import { allSource } from "@/lib/source"

export const { GET } = createSearchAPI("advanced", {
  language: "english",
  indexes: await Promise.all(
    allSource.getPages().map(async (page) => {
      const url = (() => {
        if (page.data.type === "source") {
          return `/docs/${page.url}`
        }

        return `/blog/${page.url}`
      })()
      const { structuredData } = await page.data.load()

      return {
        title: page.data.title,
        description: page.data.description,
        url: url,
        id: url,
        structuredData,
      }
    })
  ),
})
