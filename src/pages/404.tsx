import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

import Spacer from '@/components/Spacer';
import { colors, spaces, typography } from '@/constants/theme';

const Custom404: NextPage = () => {
  return (
    <Container>
      <ContentBox>
        <Title>Not Found</Title>
        <SubTitle>Sorry, there is nothing page.</SubTitle>
        <Spacer size="$14" />
        <StyledLink href="/">Go to home</StyledLink>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  inset: 0;

  background-color: ${colors.hiContrast};
  color: ${colors.loContrast};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  padding-left: ${spaces.$4};
  padding-right: ${spaces.$4};
`;

const Title = styled.h1`
  font-size: ${typography.fontSizes['4xl']};
  line-height: ${typography.lineHeight['heading-tight']};
`;

const SubTitle = styled.h2`
  margin-top: ${spaces.$2};
  font-size: ${typography.fontSizes['xl']};
  line-height: ${typography.lineHeight['heading-tight']};
`;

const StyledLink = styled(Link)`
  color: ${colors.primary900};
  font-size: ${typography.fontSizes['lg']};
  font-weight: ${typography.fontWeights.bold};
`;

export default Custom404;
