'use client';

import type { MDXRemoteProps } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';

type MDXRemoteClientProps = MDXRemoteProps;

function MDXRemoteClient({ components, ...source }: MDXRemoteClientProps) {
  return <MDXRemote {...source} components={components} />;
}

export default MDXRemoteClient;
