import appConfig from '@/app.config';
import HeadTags from '@/components/HeadTags';
import { generateFullUrl, getPost } from '@/utils/mdxUtils';

async function PostHead({ params }: { params: { slug: string[] } }) {
  const slugs = params?.slug;

  if (!Array.isArray(slugs)) {
    return <HeadTags />;
  }

  if (slugs.some((slug) => typeof slug !== 'string')) {
    return <HeadTags />;
  }

  const slug = slugs.join('/');
  const post = await getPost(slug);

  if (!post) {
    return <HeadTags />;
  }

  const title = `${post.frontMatter.title || 'Post'} - ${appConfig.title}`;
  const description = post.frontMatter.description || post.frontMatter.title;
  const ogImage = post.frontMatter.thumbnail
    ? generateFullUrl(post.frontMatter.thumbnail)
    : undefined;
  const url = `posts/${post.frontMatter.slug}`;

  return <HeadTags title={title} description={description} ogImage={ogImage} url={url} />;
}

export default PostHead;
