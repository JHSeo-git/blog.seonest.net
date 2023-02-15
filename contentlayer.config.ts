import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type { Options as autolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as prettyCodeOptions } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { getLastModifiedByFileSystem, getReadingTime } from './src/utils/contentlayer-utils';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    thumbnail: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    readingTime: {
      type: 'number',
      resolve: (post) => getReadingTime(post.body.raw),
    },
    lastModified: {
      type: 'date',
      resolve: (post) =>
        getLastModifiedByFileSystem(`./content/${post._raw.sourceFilePath}`) ?? post.date,
    },
  },
}));

const rehypePrettyCodeOptions: Partial<prettyCodeOptions> = {
  theme: 'one-dark-pro',
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word--highlighted'];
  },
};

const rehypeAutolinkHeadingsOptions: Partial<autolinkHeadingsOptions> = {
  properties: {
    className: ['heading-anchor'],
    ariaLabel: 'Link to this heading',
  },
};

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});
