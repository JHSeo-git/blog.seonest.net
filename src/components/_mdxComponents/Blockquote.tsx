import styled from 'styled-components';

import { colors, radii, spaces, typography } from '@/constants/theme';

export type BlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>;

function Blockquote({ ...rest }: BlockquoteProps) {
  return <StyledBlockquote {...rest} />;
}

const StyledBlockquote = styled.blockquote`
  padding-top: ${spaces.$4};
  padding-bottom: ${spaces.$4};
  padding-left: ${spaces.$5};
  padding-right: ${spaces.$4};
  background-color: ${colors.primary300};
  border-left: 5px solid ${colors.primary700};
  border-top-right-radius: ${radii.base};
  border-bottom-right-radius: ${radii.base};

  margin-bottom: 1rem;

  & > * {
    font-size: ${typography.fontSizes.base};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Blockquote;
