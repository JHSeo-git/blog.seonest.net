import styled from 'styled-components';

import { colors, spaces, zIndices } from '@/constants/theme';

import Container from '../Container';
import Spacer from '../Spacer';
import Footer from './Layout.BaseFooter';
import Header from './Layout.BaseHeader';

export interface LayoutBaseProps {
  children: React.ReactNode;
}

function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Main>{children}</Main>
        <Spacer size="$12" />
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Layout>
  );
}

const Layout = styled.div``;

const HeaderWrapper = styled(Container)`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};

  background-color: ${colors.loContrast};
`;

const MainWrapper = styled(Container)`
  padding-top: ${spaces.$12};
`;

const FooterWrapper = styled(Container)``;

const Main = styled.main``;

export default LayoutBase;
