import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type { Options as AutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { getReadingTime } from './src/utils/contentlayer-utils';

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
    update: {
      type: 'date',
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
      resolve: (post) => post.update ?? post.date,
    },
  },
}));

const rehypePrettyCodeOptions: Partial<PrettyCodeOptions> = {
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

const rehypeAutolinkHeadingsOptions: Partial<AutolinkHeadingsOptions> = {
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
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            // codeEl value와 src를 node로 복사
            console.log({ codeEl, node });
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
          }
        });
      },
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});
