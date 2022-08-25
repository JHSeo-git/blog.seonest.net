import styled from 'styled-components';

export interface HiddenProps {
  children: React.ReactNode;
}

function Hidden({ children }: HiddenProps) {
  return <HiddenWrapper>{children}</HiddenWrapper>;
}

const HiddenWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  border: 0px;
`;

export default Hidden;
