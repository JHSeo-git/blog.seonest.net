'use client';

// import Giscus from '@giscus/react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import appConfig from '@/app.config';

import { MyGiscus } from './MyGiscus';

export function Comment() {
  const pathname = usePathname();
  const { theme } = useTheme();

  if (!appConfig.comment) {
    return null;
  }

  return (
    <div className="mt-10">
      <MyGiscus
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
