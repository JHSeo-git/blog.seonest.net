import styled from 'styled-components';

export type DelProps = React.DelHTMLAttributes<HTMLModElement>;

function Del({ ...rest }: DelProps) {
  return <StyledDel {...rest} />;
}

const StyledDel = styled.del`
  opacity: 0.5;
`;

export default Del;
