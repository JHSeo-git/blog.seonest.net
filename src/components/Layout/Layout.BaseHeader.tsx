import Link from 'next/link';
import styled from 'styled-components';

import { zIndices } from '@/constants/theme';

import { LogoIcon } from '../icons';

export interface LayoutBaseHeaderProps {}

function LayoutBaseHeader(props: LayoutBaseHeaderProps) {
  return (
    <Header>
      <HeaderLeft>
        <Link href="/" passHref>
          <StyledLink>
            <LogoIcon />
          </StyledLink>
        </Link>
        <Nav></Nav>
      </HeaderLeft>
      <HeaderRight />
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
