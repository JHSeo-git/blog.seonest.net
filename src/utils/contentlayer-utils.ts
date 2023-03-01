import fs from 'node:fs';

import type { Post } from 'contentlayer/generated';
import * as slugger from 'github-slugger';

import appConfig from '../app.config';

const WORDS_PER_MINUTE_ENG = 200;
const WORDS_PER_MINUTE_KOR = 500;
const IMG_READ_TIME_SEC = 12;

export function getReadingTime(content: string) {
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

export const getLastModifiedByFileSystem = (filePath: string) => {
  const stats = fs.statSync(filePath);

  return stats.mtime;
};

export type TOCItem = {
  text: string;
  level: number;
  link: string;
  id: string;
  rawId: string;
};
export function getHeadings(source: string) {
  const headingLines = source.split('\n').filter((line) => line.match(/^###*\s/));

  const headings: TOCItem[] = [];

  headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '');
    const rawId = slugger.slug(text);
    const nodeLength = headings.filter((heading) => heading.rawId === rawId).length;
    const id = nodeLength > 0 ? `${rawId}-${nodeLength}` : rawId;
    const link = `#${id}`;
    let level = 2;
    if (raw.slice(0, 3) === '###') {
      level = 3;
    }
    if (raw.slice(0, 4) === '####') {
      level = 4;
    }

    headings.push({ text, level, link, id, rawId });
  });

  return headings;
}

export const postSorter = (a: Post, b: Post) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateB.getTime() - dateA.getTime();
};
