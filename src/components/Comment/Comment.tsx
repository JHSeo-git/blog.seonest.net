import Giscus from '@giscus/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import appConfig from '@/app.config';
import { spaces } from '@/constants/theme';

function Comment() {
  const { asPath } = useRouter();

  if (!appConfig.comment) {
    return null;
  }

  return (
    <CommentWrapper>
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
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  margin-top: ${spaces.$10};
`;

export default Comment;
