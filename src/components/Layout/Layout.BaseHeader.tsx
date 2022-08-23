import Link from 'next/link';
import styled from 'styled-components';

import { colors, zIndices } from '@/constants/theme';

import { TextLogoIcon } from '../_icons';
import Container from '../Container';

export interface LayoutBaseHeaderProps {}

function LayoutBaseHeader(props: LayoutBaseHeaderProps) {
  return (
    <HeaderWrapper>
      <Container>
        <Header>
          <HeaderLeft>
            <Link href="/" passHref>
              <StyledLink>
                <TextLogoIcon />
              </StyledLink>
            </Link>
            <Nav></Nav>
          </HeaderLeft>
          <HeaderRight />
        </Header>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};
`;

const Header = styled.header`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.loContrast};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a``;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export default LayoutBaseHeader;
