import appConfig from '@/app.config';
import HeadTags from '@/components/HeadTags';

async function CategoryHead({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return <HeadTags />;
  }

  const decodedSlug = decodeURIComponent(slug);
  const category = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

  const title = `${category} Posts - ${appConfig.title}`;
  const description = `${category} Posts`;
  const url = `categories/${decodedSlug}`;

  return <HeadTags title={title} description={description} url={url} />;
}

export default CategoryHead;
