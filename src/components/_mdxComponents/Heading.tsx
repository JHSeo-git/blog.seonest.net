import styled from 'styled-components';

import { typography } from '@/constants/theme';

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
`;

export default Heading;
