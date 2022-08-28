import styled from 'styled-components';

import { typography } from '@/constants/theme';

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ ...rest }: ParagraphProps) {
  return <StyledParagraph {...rest} />;
}

const StyledParagraph = styled.p`
  font-size: ${typography.fontSizes.md};
  line-height: ${typography.lineHeight['body-loose']};
`;

export default Paragraph;
