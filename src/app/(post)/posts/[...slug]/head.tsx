import { allPosts } from 'contentlayer/generated';

import appConfig from '@/app.config';
import HeadTags from '@/components/HeadTags';
import { generateFullUrl } from '@/utils/contentlayer-utils';

async function PostHead({ params }: { params: { slug: string[] } }) {
  const slugs = params?.slug;

  if (!Array.isArray(slugs)) {
    return <HeadTags />;
  }

  if (slugs.some((slug) => typeof slug !== 'string')) {
    return <HeadTags />;
  }

  const slug = slugs.map((slug) => decodeURIComponent(slug)).join('/');

  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return <HeadTags />;
  }

  const title = `${post.title || 'Post'} - ${appConfig.title}`;
  const description = post.description || post.title;
  const ogImage = post.thumbnail ? generateFullUrl(post.thumbnail) : undefined;
  const url = post.slug;

  return <HeadTags title={title} description={description} ogImage={ogImage} url={url} />;
}

export default PostHead;
