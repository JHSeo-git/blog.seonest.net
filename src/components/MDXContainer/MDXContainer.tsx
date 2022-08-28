import styled from 'styled-components';

export interface MDXContainerProps {
  children: React.ReactNode;
}

function MDXContainer({ children }: MDXContainerProps) {
  return <Container>{children}</Container>;
}

// TODO: var() 를 이용한 element color, bg-color 설정
const Container = styled.article`
  li {
    overflow-wrap: break-word;
  }
`;

export default MDXContainer;
