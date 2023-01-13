'use client';

import Giscus from '@giscus/react';
import { useTheme } from '@wits/next-themes';
import { usePathname } from 'next/navigation';

import appConfig from '@/app.config';

function Comment() {
  const pathname = usePathname();
  const { theme } = useTheme();

  if (!appConfig.comment) {
    return null;
  }

  return (
    <div className="mt-10">
      <Giscus
        key={`${pathname}_${theme}`}
        id="comments"
        repo="JHSeo-git/seonest-comments"
        repoId="R_kgDOGRegJA"
        category="Announcements"
        categoryId="DIC_kwDOGRegJM4CN-hf"
        mapping="title"
        lang="ko"
        loading="lazy"
        theme={theme}
      />
    </div>
  );
}

export default Comment;
