import styled, { css } from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';

import { useHeadingView } from './HeadingViewProvider';
import useHeadingInViewEffect from './useHeadingInViewEffect';

export interface PostNavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string;
  level: number;
}

function PostNavItem({ id, level, ...rest }: PostNavItemProps) {
  useHeadingInViewEffect(id);
  const { headingId } = useHeadingView();
  const isActive = headingId === id;

  return <NavItem {...rest} $active={isActive} $level={level} />;
}

const NavItem = styled.a<{ $level: number; $active: boolean }>`
  display: block;

  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  margin-top: ${spaces.$3};
  opacity: 0.7;

  transition: opacity 0.5s ease;

  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      color: ${colors.primary900};
    `}

  ${(props) =>
    props.$level >= 3 &&
    css`
      padding-left: ${spaces.$2};
      margin-top: ${spaces.$1};
    `}

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
  &:focus {
    opacity: 1;
  }
`;

export default PostNavItem;
