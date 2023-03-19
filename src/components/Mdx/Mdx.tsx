import { cva } from 'class-variance-authority';
import type { MDXComponents } from 'mdx/types';
import NextImage from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextTweet } from 'next-tweet';
import * as React from 'react';

import { cn } from '@/utils/style-utils';

import Admonition from '../Admonition';
import SpicyText from '../SpicyText';

const mdxImageStyle = cva('my-4 mx-auto w-full h-full object-contain');
const Image = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!src) {
    return <div className={cn(mdxImageStyle(), className)} />;
  }

  if (src.startsWith('http')) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={cn(mdxImageStyle(), className)} src={src} alt={alt} {...props} />;
  }

  return (
    <NextImage
      className={cn(mdxImageStyle(), className)}
      src={src}
      alt={alt ?? ''}
      {...props}
      width={700}
      height={400}
      placeholder="empty"
    />
  );
};
const Video = ({ className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) => (
  <video
    controls
    autoPlay
    muted={true}
    loop
    playsInline
    className={cn('my-2', className)}
    {...props}
  />
);

const components: MDXComponents = {
  h1: ({ className, children, ...props }) => (
    <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-slate-700',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }) => (
    <h4
      className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ className, children, ...props }) => (
    <h5
      className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ className, children, ...props }) => (
    <h6
      className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ className, children, ...props }) => (
    <a
      className={cn(
        'font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50',
        className
      )}
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ className, children, ...props }) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  ),
  ul: ({ className, children, ...props }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li className={cn('mt-2', className)} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600',
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ className, ...props }) => {
    const inline = !className?.match('code-highlight');

    if (inline) {
      return (
        <code
          className={cn(
            'font-mono text-sm font-semibold rounded text-indigo-800 bg-indigo-50 dark:bg-indigo-800 dark:text-indigo-100 px-1 py-0.5',
            className
          )}
          {...props}
        />
      );
    }

    return <code className={className} {...props} />;
  },
  pre: ({ className, ...props }) => (
    <div className="relative">
      <pre
        className={cn(
          'py-4 my-[1em] flex overflow-auto rounded-md',
          'font-semibold',
          '[--code-line-inset:16px] sm:[--code-line-inset:32px]',
          className
        )}
        {...props}
      />
    </div>
  ),
  hr: ({ className, ...props }) => (
    <hr
      className={cn(
        'm-0 p-0 outline-none border-none',
        'm-[72px] h-[3px] rounded-md border-white bg-indigo-700 dark:border-black dark:bg-indigo-300',
        'bg-gradient-to-r from-indigo-700 to-rose-700 dark:from-indigo-500 dark:to-rose-500',
        className
      )}
      {...props}
    />
  ),
  img: ({ alt, ...props }) => <Image alt={alt} {...props} />,
  video: (props) => <Video {...props} />,

  // custom
  Admonition,
  SpicyText,
  Video,
  ImageCaption: ({
    src,
    alt,
    children,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { children?: string }) => (
    <figure className="my-4 w-full">
      <Image {...props} src={src} alt={alt} className="my-0" />
      <figcaption className="mt-2 truncate text-center text-sm opacity-50">{children}</figcaption>
    </figure>
  ),
  Tweet: ({ id }: { id: string }) => (
    <div className="mb-6 flex justify-center">
      {/* @ts-ignore: Async components are valid in the app directory */}
      <NextTweet id={id} />
    </div>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
