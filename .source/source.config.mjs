// source.config.ts
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    async: true
  }
});
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date())
  }),
  async: true
});
var source_config_default = defineConfig({
  plugins: [lastModified()]
});
export {
  blog,
  source_config_default as default,
  docs
};
