import styled, { css } from 'styled-components';

import { colors, radii, spaces, typography } from '@/constants/theme';

import AdmonitionIcon from './AdmonitionIcon';

export type AdmonitionType = 'note' | 'info' | 'tip' | 'caution' | 'danger';
export interface AdmonitionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AdmonitionType;
}

function Admonition({ type = 'note', children, ...rest }: AdmonitionProps) {
  return (
    <AdmonitionWrapper admonitionType={type} {...rest}>
      <AdmonitionHeader>
        <AdmonitionIcon admonitionType={type} />
        <AdmonitionLabel>{type}</AdmonitionLabel>
      </AdmonitionHeader>
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionWrapper>
  );
}

const AdmonitionWrapper = styled.div<{ admonitionType: AdmonitionType }>`
  padding: ${spaces.$4};
  margin-bottom: ${spaces.$2};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: ${radii.base};

  border-left: 5px solid ${colors.gray7};
  background-color: ${colors.gray2};
  color: ${colors.gray12};

  ${({ admonitionType }) => {
    switch (admonitionType) {
      case 'note':
        return css`
          border-left: 5px solid ${colors.gray7};
          background-color: ${colors.gray2};
          color: ${colors.gray12};

          & ${AdmonitionHeader} {
            color: ${colors.gray11};
          }
        `;
      case 'caution':
        return css`
          border-left: 5px solid ${colors.yellow7};
          background-color: ${colors.yellow2};
          color: ${colors.yellow12};

          & ${AdmonitionHeader} {
            color: ${colors.yellow11};
          }
        `;
      case 'danger':
        return css`
          border-left: 5px solid ${colors.red7};
          background-color: ${colors.red2};
          color: ${colors.red12};

          & ${AdmonitionHeader} {
            color: ${colors.red11};
          }
        `;
      case 'info':
        return css`
          border-left: 5px solid ${colors.blue7};
          background-color: ${colors.blue2};
          color: ${colors.blue12};

          & ${AdmonitionHeader} {
            color: ${colors.blue11};
          }
        `;
      case 'tip':
        return css`
          border-left: 5px solid ${colors.green7};
          background-color: ${colors.green2};
          color: ${colors.green12};

          & ${AdmonitionHeader} {
            color: ${colors.green11};
          }
        `;
      default:
        return css`
          border-left: 5px solid ${colors.gray7};
          background-color: ${colors.gray2};
          color: ${colors.gray12};

          & ${AdmonitionHeader} {
            color: ${colors.gray11};
          }
        `;
    }
  }};
`;

const AdmonitionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces.$1};
`;
const AdmonitionLabel = styled.p`
  text-transform: uppercase;
  font-weight: ${typography.fontWeights.bold};
  font-size: ${typography.fontSizes.sm};
`;

const AdmonitionContent = styled.div`
  margin-top: ${spaces.$2};

  & *:last-of-type {
    margin: 0;
  }
`;

export default Admonition;
