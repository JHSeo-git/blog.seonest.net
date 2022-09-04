import Giscus from '@giscus/react';
import styled from 'styled-components';

import appConfig from '@/app.config';
import { spaces } from '@/constants/theme';

function Comment() {
  if (!appConfig.comment) {
    return null;
  }

  return (
    <CommentWrapper>
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
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  margin-top: ${spaces.$10};
`;

export default Comment;
