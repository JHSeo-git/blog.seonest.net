import fs from 'fs/promises';
import slugger from 'github-slugger';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { getDistanceToNow } from './dateUtils';
import { getSlug, globPromise } from './fileUtils.server';

const WORDS_PER_MINUTE_ENG = 200;
const WORDS_PER_MINUTE_KOR = 500;
const IMG_READ_TIME_SEC = 12;

const POSTS_PATH = path.join(process.cwd(), '__post');

export async function getAllFilePaths() {
  const paths = await globPromise(`${POSTS_PATH}/**/*.?(md|mdx)`);
  const mdxFilePaths = paths.filter((path) => /\.mdx?$/.test(path));

  return mdxFilePaths;
}

// 파일명이 slug 규칙에 맞지 않는 경우를 생각해서 파일명을 slug로 재정의하여 처리한다.
export async function getAllSlugs() {
  const paths = await getAllFilePaths();
  const slugs = paths.map((path) => getSlug(replaceMDXPath(path)));

  return slugs;
}

export async function getFilePathBySlug(slug: string) {
  const paths = await getAllFilePaths();
  const pathSlugMap = paths.map((path) => ({ path, slug: getSlug(replaceMDXPath(path)) }));
  const filePath = pathSlugMap.find((map) => map.slug === slug)?.path;

  return filePath;
}

export async function getAllPosts() {
  const slugs = await getAllSlugs();

  const posts = await Promise.all(slugs.map(getPost));
  const filteredPosts = posts.filter(Boolean);
  const sortedPosts = filteredPosts.sort(postSorter);

  return sortedPosts;
}

export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();
  const filteredPosts = posts.filter((post) => post.frontMatter.category === category);
  const sortedPosts = filteredPosts.sort(postSorter);

  return sortedPosts;
}

export type CategoryInfo = {
  name: string;
  count: number;
};
export async function getAllCategories() {
  const posts = await getAllPosts();
  const categories = posts.reduce<CategoryInfo[]>((acc, post) => {
    const category = post.frontMatter.category;
    if (!category) {
      return acc;
    }

    const index = acc.findIndex((item) => item.name === category);

    if (index === -1) {
      acc.push({ name: category, count: 1 });
    } else {
      acc[index].count += 1;
    }

    return acc;
  }, []);
  const sortedCategories = categories.sort(catagorySorter);

  return sortedCategories;
}

export async function getPrevNextBySlug(slug: string) {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.frontMatter.slug === slug);
  const next = index === 0 ? null : posts[index - 1];
  const prev = index === posts.length - 1 ? null : posts[index + 1];

  return { prev, next };
}

export async function getPost(slug: string) {
  const filePath = await getFilePathBySlug(slug);

  if (!filePath) {
    return;
  }

  const source = await fs.readFile(filePath);
  const stat = await fs.stat(filePath);
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        // https://github.com/remarkjs/remark-gfm
        remarkGfm,
      ],
      rehypePlugins: [
        // https://github.com/timlrx/rehype-prism-plus#sample-markdown-to-html-output
        rehypePrism,
        // https://github.com/rehypejs/rehype-slug
        rehypeSlug,
        // https://github.com/rehypejs/rehype-autolink-headings
        rehypeAutolinkHeadings,
      ],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    rawContent: content,
    toc: getHeadings(content),
    frontMatter: getFrontMatter({
      ...data,
      slug,
      readingTime: getReadingTime(content),
      lastModified: stat.mtime.toISOString(),
    }),
  };
}
export type Post = Awaited<ReturnType<typeof getPost>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnTypedFrontMatter = { [key: string]: any };
export type PostFrontMatter = {
  title: string;
  subTitle?: string | null;
  description?: string | null;
  date?: string | null;
  category?: string | null;
  tags?: string[] | null;
  draft?: boolean | null;
  slug: string;
  readingTime?: number;
  lastModified?: string | null;
  thumbnail?: string | null;
};

function getFrontMatter(untypedFrontMatter: UnTypedFrontMatter) {
  const frontMatter: PostFrontMatter = {
    title: untypedFrontMatter.title,
    subTitle: untypedFrontMatter.subTitle ?? null,
    description: untypedFrontMatter.description ?? null,
    date: untypedFrontMatter.date ?? null,
    category: untypedFrontMatter.category ?? null,
    tags: untypedFrontMatter.tags ?? null,
    draft: untypedFrontMatter.draft ?? null,
    slug: untypedFrontMatter.slug,
    readingTime: untypedFrontMatter.readingTime ?? null,
    lastModified: untypedFrontMatter.lastModified ?? null,
    thumbnail: untypedFrontMatter.thumbnail ?? null,
  };

  return frontMatter;
}

function replaceMDXPath(path: string) {
  return path.replace(POSTS_PATH, '').replace(/\.mdx?$/, '');
}

function postSorter(a: Post, b: Post) {
  if (!a?.frontMatter.date) {
    return 1;
  }
  if (!b?.frontMatter.date) {
    return 1;
  }
  return new Date(a.frontMatter.date).getTime() - new Date(b.frontMatter.date).getTime() > 0
    ? -1
    : 1;
}

function catagorySorter(a: CategoryInfo, b: CategoryInfo) {
  return a.count - b.count > 0 ? -1 : 1;
}

function getHeadings(source: string) {
  const headingLines = source.split('\n').filter((line) => line.match(/^###*\s/));

  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '');
    const id = slugger.slug(text);
    const link = `#${id}`;
    const level = raw.slice(0, 3) === '###' ? 3 : 2;

    return { text, level, link, id };
  });
}

function getReadingTime(content: string) {
  const minutes = getReadTime(content);

  const text = minutes < 1 ? '1분 이내' : `${Math.ceil(minutes)}분`;

  return text;
}

const countImages = (markdown: string) => {
  const imgRegex = /\\!\[(.*?)\][\\[\\(].*?[\]\\)]/g;
  return (markdown.match(imgRegex) ?? []).length;
};

const calculateImageReadTime = (imgCount: number) => {
  if (imgCount === 0) return 0;

  let seconds = 0;

  if (imgCount > 10) {
    seconds = (imgCount / 2) * (IMG_READ_TIME_SEC + 3) + (imgCount - 10) * 3;
  } else {
    seconds = (imgCount / 2) * (IMG_READ_TIME_SEC * 2 + (imgCount - 1) * -1);
  }

  return seconds / 60;
};

const calculateMarkdownReadTime = (content: string) => {
  const plainText = content;

  // const korPattern =
  //   '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]+';
  // const korRegex = new RegExp(korPattern, 'g');
  const korRegex = /[가-힣]+/g;
  const engRegex = /\w+/g;

  const removedKor = plainText.replace(korRegex, '');

  const korReadTime = (plainText.match(korRegex) ?? []).length / WORDS_PER_MINUTE_KOR;
  const engReadTime = (removedKor.match(engRegex) ?? []).length / WORDS_PER_MINUTE_ENG;

  return korReadTime + engReadTime;
};

export const getReadTime = (markdown: string) => {
  const imgCount = countImages(markdown);

  const textReadTime = calculateMarkdownReadTime(markdown);
  const imgReadTime = calculateImageReadTime(imgCount);

  return textReadTime + imgReadTime;
};
