import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings, {
  type Options as AutolinkHeadingsOptions,
} from "rehype-autolink-headings"
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { getReadingTime } from "./src/utils/contentlayer-utils"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    thumbnail: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    update: {
      type: "date",
    },
    draft: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    readingTime: {
      type: "number",
      resolve: (post) => getReadingTime(post.body.raw),
    },
    lastModified: {
      type: "date",
      resolve: (post) => post.update ?? post.date,
    },
  },
}))

const rehypePrettyCodeOptions: Partial<PrettyCodeOptions> = {
  theme: "one-dark-pro",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
}

const rehypeAutolinkHeadingsOptions: Partial<AutolinkHeadingsOptions> = {
  properties: {
    className: ["heading-anchor"],
    ariaLabel: "Link to this heading",
  },
}

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode as (options: unknown) => void, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
})
