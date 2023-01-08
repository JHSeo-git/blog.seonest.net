import appConfig from '@/app.config';
import HeadTags from '@/components/HeadTags';

function AboutHead() {
  return (
    <>
      <HeadTags title={`About - ${appConfig.title}`} />
    </>
  );
}

export default AboutHead;
