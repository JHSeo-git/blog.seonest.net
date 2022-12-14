import components from '@/components/_mdxComponents';
import Container from '@/components/Container';
import Hidden from '@/components/Hidden';
import MDXRemoteClient from '@/components/MDXRemoteClient';
import { getDistanceToNow } from '@/utils/dateUtils';
import { getAbout } from '@/utils/mdxUtils';

const getAboutInfo = async () => {
  const aboutMdx = await getAbout();

  return {
    source: aboutMdx.source,
    frontMatter: aboutMdx.frontMatter,
    toc: aboutMdx.toc,
  };
};

async function AbountPage() {
  const { source, frontMatter } = await getAboutInfo();

  return (
    <Container className="py-[72px]">
      <Hidden>
        <h1>About JHSeo</h1>
      </Hidden>
      <div className="flex items-center justify-end">
        <p className="text-xs text-gray-700 mr-2 italic font-bold">Last updated:</p>
        <p className="text-xs text-gray-700 mr-2 italic">
          {getDistanceToNow(frontMatter.lastModified, { humanize: false })}
        </p>
      </div>
      <MDXRemoteClient {...source} components={components} />
    </Container>
  );
}

export default AbountPage;
