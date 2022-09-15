import styled from 'styled-components';

import { colors, spaces } from '@/constants/theme';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

function Table({ ...rest }: TableProps) {
  return <StyledTable {...rest} />;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  margin-top: ${spaces.$6};
  margin-bottom: ${spaces.$6};

  & th,
  & td {
    padding: ${spaces.$4};
  }

  & tr {
    border-bottom: 1px solid ${colors.borderColor};
  }
`;

export default Table;
