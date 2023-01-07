import Giscus from '@giscus/react';
import { useRouter } from 'next/router';

import appConfig from '@/app.config';

function Comment() {
  const { asPath } = useRouter();

  if (!appConfig.comment) {
    return null;
  }

  return (
    <div className="mt-10">
      <Giscus
        key={asPath}
        id="comments"
        repo="JHSeo-git/seonest-comments"
        repoId="R_kgDOGRegJA"
        category="Announcements"
        categoryId="DIC_kwDOGRegJM4CN-hf"
        mapping="title"
        lang="ko"
        loading="lazy"
        // TODO: dark mode
        theme="light"
      />
    </div>
  );
}

export default Comment;
