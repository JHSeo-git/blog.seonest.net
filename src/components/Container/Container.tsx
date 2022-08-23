import styled from 'styled-components';

import breakpoints from '@/constants/theme/breakpoints';

export interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}

const MaxWidthWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 32px;
  }
`;

export default Container;
