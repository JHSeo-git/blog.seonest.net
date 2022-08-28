import styled from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

function Code({ className, ...rest }: CodeProps) {
  const inline = !className?.match('code-highlight');

  if (inline) {
    return <StyledCode className={className} {...rest} />;
  }

  return <code className={className} {...rest} />;
}

const StyledCode = styled.code`
  font-family: ${typography.fontFamily.mono};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.secondary900};
  padding-left: ${spaces.$1};
  padding-right: ${spaces.$1};
`;

export default Code;
