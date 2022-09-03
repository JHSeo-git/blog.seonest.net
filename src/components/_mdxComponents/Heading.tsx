import styled, { css } from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: HeadingAs;
}

function Heading({ as, ...rest }: HeadingProps) {
  return <StyledHeading as={as} {...rest} />;
}

const StyledHeading = styled.h1<{ as: HeadingAs }>`
  font-size: ${(props) => typography.fontSizes[props.as]};
  line-height: ${typography.lineHeight.heading};
  scroll-margin-top: 80px;

  ${(props) =>
    props.as === 'h1' &&
    css`
      margin-top: ${spaces.$14};
      margin-bottom: ${spaces.$7};
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      margin-top: ${spaces.$12};
      margin-bottom: ${spaces.$5};
      color: ${colors.primary1100};
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      margin-top: ${spaces.$12};
      margin-bottom: ${spaces.$3};
    `}
`;

export default Heading;
