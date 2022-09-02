import styled from 'styled-components';

import { colors, radii, spaces, typography } from '@/constants/theme';

export interface CategoryChipProps {
  category: string;
}

function CategoryChip({ category }: CategoryChipProps) {
  return (
    <Chip>
      <span>{category}</span>
    </Chip>
  );
}

const Chip = styled.div`
  padding-top: ${spaces.$1};
  padding-bottom: ${spaces.$1};
  padding-left: ${spaces.$4};
  padding-right: ${spaces.$4};

  display: inline-flex;
  align-items: center;
  gap: ${spaces.$2};

  font-weight: ${typography.fontWeights.bold};
  text-transform: capitalize;

  border-radius: ${radii.base};
  color: ${colors.loContrast};
  background-color: ${colors.primary900};
`;

export default CategoryChip;
