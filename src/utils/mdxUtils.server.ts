import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { getSlug, globPromise } from './fileUtils.server';

const POSTS_PATH = path.join(process.cwd(), '__post');

export async function getAllFilePaths() {
  const paths = await globPromise(`${POSTS_PATH}/**/*.?(md|mdx)`);
  const mdxFilePaths = paths.filter((path) => /\.mdx?$/.test(path));

  return mdxFilePaths;
}

// 파일명이 slug 규칙에 맞지 않는 경우를 생각해서 파일명을 slug로 재정의하여 처리한다.
export async function getAllSlugs() {
  const paths = await getAllFilePaths();
  const slugs = paths.map((path) => getSlug(path.replace(/\.mdx?$/, '')));

  return slugs;
}

export async function getFilePathBySlug(slug: string) {
  const paths = await getAllFilePaths();
  const pathSlugMap = paths.map((path) => ({ path, slug: getSlug(path.replace(/\.mdx?$/, '')) }));
  const filePath = pathSlugMap.find((map) => map.slug === slug)?.path;

  return filePath;
}

export async function getAllPosts() {
  const slugs = await getAllSlugs();
  console.log({ slugs });

  const posts = await Promise.all(slugs.map(getPost));

  return posts.filter(Boolean);
}

export async function getPost(slug: string) {
  const filePath = await getFilePathBySlug(slug);

  if (!filePath) {
    return;
  }

  const source = await fs.readFile(filePath);
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: getFrontMatter(data),
  };
}
export type Post = Awaited<ReturnType<typeof getPost>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnTypedFrontMatter = { [key: string]: any };
type FrontMatter = {
  title: string;
  description?: string;
  date?: Date;
  category?: string;
  tags?: string[];
  draft?: boolean;
};

export function getFrontMatter(untypedFrontMatter: UnTypedFrontMatter) {
  const frontMatter: FrontMatter = {
    title: untypedFrontMatter.title,
    description: untypedFrontMatter.description,
    date: new Date(untypedFrontMatter.date),
    category: untypedFrontMatter.category,
    tags: untypedFrontMatter.tags,
    draft: untypedFrontMatter.draft,
  };

  return frontMatter;
}
