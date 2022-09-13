import styled, { css } from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

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
  padding-left: ${spaces.$2};
  padding-right: ${spaces.$2};

  ${({ $em }) =>
    $em &&
    css`
      font-style: italic;
    `};
`;

export default SpicyText;
