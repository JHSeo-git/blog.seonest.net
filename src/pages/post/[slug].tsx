import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Layout from '@/components/Layout';
import { getDistanceToNow } from '@/utils/dateUtils.server';
import type { Post, PostFrontMatter } from '@/utils/mdxUtils.server';
import { getAllSlugs, getPost } from '@/utils/mdxUtils.server';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

type SerializedPostFromatter = { id: string } & PostFrontMatter;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const mdx = await getPost(slug);

  if (!mdx) {
    return {
      notFound: true,
    };
  }

  const serializedFrontMatter: SerializedPostFromatter = {
    id: `${mdx.frontMatter.slug}_${mdx.frontMatter.date ?? Date.now()}`,
    title: mdx.frontMatter.title,
    subTitle: mdx.frontMatter.subTitle,
    description: mdx.frontMatter.description,
    date: mdx.frontMatter.date ? getDistanceToNow(mdx.frontMatter.date) : null,
    category: mdx.frontMatter.category,
    tags: mdx.frontMatter.tags,
    draft: mdx.frontMatter.draft,
    slug: mdx.frontMatter.slug,
  };

  return {
    props: {
      source: mdx.source,
      frontMatter: serializedFrontMatter,
    },
  };
};

type PostPageProps = NonNullable<Post> & {
  frontMatter: SerializedPostFromatter;
};

const PostPage: NextPage<PostPageProps> = ({ source, frontMatter }) => {
  return (
    <Layout>
      <p>{JSON.stringify(frontMatter, null, 2)}</p>
      <MDXRemote {...source} />
    </Layout>
  );
};

export default PostPage;
