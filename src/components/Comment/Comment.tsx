import Giscus from '@giscus/react';

import appConfig from '@/app.config';

function Comment() {
  if (!appConfig.comment) {
    return null;
  }

  return (
    <Giscus
      id="comments"
      repo="JHSeo-git/seonest-comments"
      repoId="R_kgDOGRegJA"
      category="Announcements"
      categoryId="DIC_kwDOGRegJM4CN-hf"
      mapping="pathname"
      lang="ko"
      loading="lazy"
    />
  );
}

export default Comment;
