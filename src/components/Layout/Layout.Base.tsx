import styled from 'styled-components';

import Container from '../Container';
import Header from './Layout.BaseHeader';

export interface LayoutBaseProps {
  children: React.ReactNode;
}

function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <Layout>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Layout>
  );
}

const Layout = styled.div``;
const Main = styled.main``;

export default LayoutBase;
