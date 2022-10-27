import styled from 'styled-components';

import { breakpoints, typography } from '@/constants/theme';

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ ...rest }: ParagraphProps) {
  return <StyledParagraph {...rest} />;
}

const StyledParagraph = styled.p`
  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight['body-loose']};

  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.sm}) {
    font-size: ${typography.fontSizes.md};
  }
`;

export default Paragraph;
