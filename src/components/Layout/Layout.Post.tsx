import styled from 'styled-components';

import { colors, spaces, typography, zIndices } from '@/constants/theme';
import useBodyBackgroundColorEffect from '@/hooks/useBodyBackgroundColorEffect';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils.server';

import { CalendarIcon, TimeIcon } from '../_icons';
import Container from '../Container';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';

export interface LayoutPostProps {
  children: React.ReactNode;
  postFrontMatter?: MDXFrontMatter;
}

function LayoutPost({ children, postFrontMatter }: LayoutPostProps) {
  useBodyBackgroundColorEffect('sky2');

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
            <PostItemBox>
              <TimeIcon width={16} height={16} />
              <TimeText>{postFrontMatter.readingTime}</TimeText>
            </PostItemBox>
            <PostItemBox>
              <CalendarIcon width={16} height={16} />
              <DateText>{getDistanceToNow(postFrontMatter.date, { humanize: false })}</DateText>
            </PostItemBox>
          </HeroBottom>
        </HeroWrapper>
      )}
      <DarkHeaderBackground />
      <Main>
        <MainWrapper>{children}</MainWrapper>
      </Main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Layout>
  );
}

const Layout = styled.div`
  --layout-background-color: ${colors.sky2};

  background-color: var(--layout-background-color);
`;

const HeaderWrapper = styled(Container)`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};
`;

const Main = styled.main`
  background-color: ${colors.loContrast};
`;

const MainWrapper = styled(Container)`
  padding-top: ${spaces.$12};
`;

const HeroWrapper = styled(Container)`
  padding-top: ${spaces.$10};
  padding-bottom: ${spaces.$14};
`;

const FooterWrapper = styled(Container)``;

const HeroBottom = styled.div`
  margin-top: ${spaces.$6};
  display: flex;
  align-items: center;
  gap: ${spaces.$4};

  color: ${colors.gray11};
`;

const PostTitle = styled.h1`
  font-family: ${typography.fontFamily.base};
  font-size: ${typography.fontSizes.h1};
  line-height: ${typography.lineHeight['heading-tight']};
`;

const PostItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces.$1};
`;

const TimeText = styled.p`
  font-size: ${typography.fontSizes.xs};
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
