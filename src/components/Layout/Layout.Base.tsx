import styled from 'styled-components';

import breakpoints from '@/constants/theme/breakpoints';

import Header from './Layout.BaseHeader';

export interface LayoutBaseProps {
  children: React.ReactNode;
}

function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <Layout>
      <MaxWidthWrapper>
        <Header />
      </MaxWidthWrapper>
      <MaxWidthWrapper as="main">{children}</MaxWidthWrapper>
    </Layout>
  );
}

const Layout = styled.div``;

const MaxWidthWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 32px;
  }
`;

export default LayoutBase;
