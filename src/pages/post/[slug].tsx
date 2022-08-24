import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '@/components/Layout';
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

  return {
    props: {
      source: mdx.source,
      frontMatter: mdx.frontMatter,
    },
  };
};

const PostPage: NextPage = () => {
  return <Layout>Postpage</Layout>;
};

export default PostPage;
