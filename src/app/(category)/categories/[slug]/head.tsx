import appConfig from '@/app.config';
import HeadTags from '@/components/HeadTags';

async function CategoryHead({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return <HeadTags />;
  }

  const category = slug.charAt(0).toUpperCase() + slug.slice(1);

  const title = `${category} Posts - ${appConfig.title}`;
  const description = `${category} Posts`;
  const url = `categories/${slug}`;

  return <HeadTags title={title} description={description} url={url} />;
}

export default CategoryHead;
