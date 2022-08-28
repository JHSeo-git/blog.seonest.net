import styled, { css } from 'styled-components';

import { colors, typography } from '@/constants/theme';

export interface SpicyTextProps {
  children: React.ReactNode;
  em?: boolean;
}

function SpicyText({ children, em = true }: SpicyTextProps) {
  return <StyledText $em={em}>{children}</StyledText>;
}

const StyledText = styled.span<{ $em: boolean }>`
  font-family: ${typography.fontFamily.spicy};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.teritary900};

  ${({ $em }) =>
    $em &&
    css`
      font-style: italic;
    `};
`;

export default SpicyText;
