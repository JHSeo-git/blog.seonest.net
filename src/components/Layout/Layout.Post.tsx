import styled from 'styled-components';

import { colors, spaces, typography, zIndices } from '@/constants/theme';
import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';
import type { PostFrontMatter } from '@/utils/mdxUtils.server';

import { CalendarIcon } from '../_icons';
import Container from '../Container';
import Spacer from '../Spacer';
import Header from './Layout.BaseHeader';

export interface LayoutPostProps {
  children: React.ReactNode;
  postFrontMatter?: PostFrontMatter;
}

function LayoutPost({ children, postFrontMatter }: LayoutPostProps) {
  useBodyBackgroundColorEffect('sky3');

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <LightHeaderBackground />
      {postFrontMatter && (
        <HeroWrapper>
          <PostTitle>{postFrontMatter.title}</PostTitle>
          <HeroBottom>
            <DateBox>
              <CalendarIcon width={16} height={16} />
              <DateText>{postFrontMatter.date}</DateText>
            </DateBox>
          </HeroBottom>
        </HeroWrapper>
      )}
      <DarkHeaderBackground />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
      <Spacer size="$12" />
    </Layout>
  );
}

const Layout = styled.div`
  --layout-background-color: ${colors.sky3};

  background-color: var(--layout-background-color);
`;

const HeaderWrapper = styled(Container)`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};
`;

const MainWrapper = styled(Container)`
  padding-top: ${spaces.$12};

  background-color: ${colors.loContrast};
`;

const Main = styled.main``;

const HeroWrapper = styled(Container)`
  padding-top: ${spaces.$10};
  padding-bottom: ${spaces.$10};
`;

const HeroBottom = styled.div`
  margin-top: ${spaces.$6};
  display: flex;
  align-items: center;

  color: ${colors.gray11};
`;

const PostTitle = styled.h1`
  font-family: ${typography.fontFamily.base};
  font-size: ${typography.fontSizes.h1};
  line-height: ${typography.lineHeight['heading-tight']};
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces.$1};
`;

const DateText = styled.p`
  font-size: ${typography.fontSizes.xs};
`;

const HeaderStickyBackground = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const LightHeaderBackground = styled(HeaderStickyBackground)`
  background-color: var(--layout-background-color);
`;

const DarkHeaderBackground = styled(HeaderStickyBackground)`
  background-color: ${colors.loContrast};
`;

export default LayoutPost;
