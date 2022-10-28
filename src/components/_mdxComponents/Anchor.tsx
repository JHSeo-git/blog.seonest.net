import Link from 'next/link';
import styled from 'styled-components';

import { colors, typography } from '@/constants/theme';

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Anchor({ href, ...rest }: AnchorProps) {
  if (!href) {
    return <StyledAnchor href="#" target="_blank" rel="noopener noreferrer" {...rest} />;
  }

  const external = href && href.startsWith('http');

  if (external) {
    return <StyledAnchor href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
  }

  return <StyledAnchor href={href} {...rest} />;
}

const StyledAnchor = styled(Link)`
  color: ${colors.blue9};
  font-weight: ${typography.fontWeights.bold};

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Anchor;
