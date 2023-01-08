'use client';

import Giscus from '@giscus/react';
import { usePathname } from 'next/navigation';

import appConfig from '@/app.config';

function Comment() {
  const pathname = usePathname();

  if (!appConfig.comment) {
    return null;
  }

  return (
    <div className="mt-10">
      <Giscus
        key={pathname}
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
