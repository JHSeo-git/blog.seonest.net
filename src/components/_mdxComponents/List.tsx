import styled from 'styled-components';

import { breakpoints, spaces, typography } from '@/constants/theme';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  listType: 'ol' | 'ul';
}

function List({ listType, ...rest }: ListProps) {
  return <StyledList as={listType} {...rest} />;
}

export type ItemProps = React.HTMLAttributes<HTMLLIElement>;

function Item({ ...rest }: ItemProps) {
  return <StyledItem {...rest} />;
}

List.Item = Item;

const StyledList = styled.ul`
  padding-left: ${spaces.$6};

  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight['body-loose']};

  @media (min-width: ${breakpoints.sm}) {
    font-size: ${typography.fontSizes.md};
  }
`;

const StyledItem = styled.li`
  margin-top: ${spaces.$2};
  margin-bottom: ${spaces.$2};

  overflow-wrap: break-word;
`;

export default List;
