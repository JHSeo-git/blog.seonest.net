import Link from 'next/link';
import styled from 'styled-components';

import { TextLogoIcon } from '../_icons';
import MenuButton from './MenuButton';

function LayoutBaseHeader() {
  return (
    <Header>
      <HeaderLeft>
        <StyledLink href="/">
          <TextLogoIcon />
        </StyledLink>
        <Nav></Nav>
      </HeaderLeft>
      <HeaderRight>
        <MenuButton />
      </HeaderRight>
    </Header>
  );
}

const Header = styled.header`
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

const StyledLink = styled(Link)``;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export default LayoutBaseHeader;
