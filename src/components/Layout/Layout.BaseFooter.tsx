import styled from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

export interface LayoutBaseFooterProps {}

function LayoutBaseFooter(props: LayoutBaseFooterProps) {
  return (
    <Footer>
      <Info>
        &copy;
        {new Date().getFullYear()}
        <StyledLink href="https://github.com/JHSeo-git" target="_blank" rel="noopener noreferrer">
          JHSeo
        </StyledLink>
        , Built with
        <StyledLink href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          next.js
        </StyledLink>
      </Info>
    </Footer>
  );
}

const Footer = styled.footer`
  padding: ${spaces.$10};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${typography.fontSizes.xs};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.gray11};
`;

const StyledLink = styled.a`
  margin-left: ${spaces.$1};
  color: ${colors.primary900};
  font-weight: ${typography.fontWeights.bold};
`;

export default LayoutBaseFooter;
