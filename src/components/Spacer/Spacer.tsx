import styled from 'styled-components';

import { spaces } from '@/constants/theme';

type Size = keyof typeof spaces;
export interface SpacerProps {
  size: Size;
}

function Spacer({ size }: SpacerProps) {
  return <Box $size={size} data-size={spaces[size]} />;
}

const Box = styled.div<{ $size: Size }>`
  min-height: ${(props) => spaces[props.$size]};
  min-width: ${(props) => spaces[props.$size]};
`;

export default Spacer;
