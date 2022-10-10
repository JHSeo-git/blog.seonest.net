import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { colors, radii, spaces, typography } from '@/constants/theme';
import { getDistanceToNow } from '@/utils/dateUtils';
import type { MDXFrontMatter } from '@/utils/mdxUtils.server';

import Spacer from '../Spacer';

type Mode = 'base' | 'card';
export interface PostCardProps {
  post: MDXFrontMatter;
  mode?: Mode;
}

function PostCard({ post, mode = 'base' }: PostCardProps) {
  const { title, subTitle, description, date } = post;
  const [distanceDate, setDistanceDate] = useState<string | undefined>();

  useEffect(() => {
    setDistanceDate(getDistanceToNow(date));
  }, [date]);

  return (
    <Card $mode={mode}>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {description && <Description>{description}</Description>}
      <Spacer size="xl" />
      <CardBottom>
        <CardBottomLeft></CardBottomLeft>
        <CardBottomRight>
          <DateText>{distanceDate}</DateText>
        </CardBottomRight>
      </CardBottom>
    </Card>
  );
}

const Card = styled.article<{ $mode: Mode }>`
  ${({ $mode }) =>
    $mode === 'card' &&
    css`
      padding: ${spaces.$8};
      background-color: ${colors.loContrast};
      border-radius: ${radii.base};
    `}
`;

const Title = styled.h3`
  font-size: ${typography.fontSizes.h3};
  line-height: ${typography.lineHeight.heading};
`;

const SubTitle = styled.h4`
  font-size: ${typography.fontSizes.h4};
  line-height: ${typography.lineHeight.heading};
  color: ${colors.gray11};

  margin-top: ${spaces.xl};
`;

const Description = styled.p`
  font-size: ${typography.fontSizes.base};
  line-height: ${typography.lineHeight['body-loose']};
  color: ${colors.gray12};

  margin-top: ${spaces.xl};
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardBottomLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CardBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

const DateText = styled.p`
  font-size: ${typography.fontSizes.sm};
  color: ${colors.gray11};
`;

export default PostCard;
