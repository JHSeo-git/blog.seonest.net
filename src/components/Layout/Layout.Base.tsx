import styled from 'styled-components';

import { spaces, zIndices } from '@/constants/theme';

import Container from '../Container';
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
      </MainWrapper>
    </Layout>
  );
}

const Layout = styled.div``;

const MainWrapper = styled(Container)`
  padding-top: ${spaces.$12};
`;

const HeaderWrapper = styled(Container)`
  position: sticky;
  top: 0;
  z-index: ${zIndices.$1};
`;

const Main = styled.main``;

export default LayoutBase;
