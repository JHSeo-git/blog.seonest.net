import styled from 'styled-components';

import breakpoints from '@/constants/theme/breakpoints';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <MaxWidthWrapper className={className}>{children}</MaxWidthWrapper>;
}

const MaxWidthWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export default Container;
