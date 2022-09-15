import styled from 'styled-components';

import { spaces, typography } from '@/constants/theme';
import type { Post } from '@/utils/mdxUtils.server';

import HeadingViewProvider from './HeadingViewProvider';
import PostNavItem from './PostNav.Item';

export interface PostNavProps {
  title: string;
  toc: NonNullable<Post>['toc'];
}

function PostNavChildren({ title, toc }: PostNavProps) {
  return (
    <Nav>
      <NavTitle>{title}</NavTitle>
      {toc.map((tocItem) => (
        <PostNavItem href={tocItem.link} key={tocItem.id} id={tocItem.id} level={tocItem.level}>
          {tocItem.text}
        </PostNavItem>
      ))}
    </Nav>
  );
}

function PostNav({ title, toc }: PostNavProps) {
  return (
    <HeadingViewProvider>
      <PostNavChildren title={title} toc={toc} />
    </HeadingViewProvider>
  );
}

const Nav = styled.nav`
  margin-bottom: ${spaces.$8};
`;
const NavTitle = styled.h2`
  font-size: ${typography.fontSizes.lg};
  letter-spacing: 1px;
  text-transform: uppercase;

  margin-bottom: ${spaces.$4};
`;

export default PostNav;
