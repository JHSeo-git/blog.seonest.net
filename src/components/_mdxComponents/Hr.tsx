import styled from 'styled-components';

import { colors, radii, spaces } from '@/constants/theme';

export type HrProps = React.HTMLAttributes<HTMLHRElement>;

function Hr({ ...rest }: HrProps) {
  return <StyledHR {...rest} />;
}

const StyledHR = styled.hr`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  margin: ${spaces.$14};

  height: 3px;
  border-radius: ${radii.base};
  border-color: white;
  background-color: ${colors.primary900};
  background: linear-gradient(90deg, ${colors.primary900} 0%, ${colors.secondary900} 100%);
`;

export default Hr;
