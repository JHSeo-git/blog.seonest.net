import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins"
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config"
import lastModified from "fumadocs-mdx/plugins/last-modified"
import { z } from "zod"

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
    }),
    async: true,
  },
})

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date()),
  }),
  async: true,
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
  plugins: [lastModified()],
})
