import styled from 'styled-components';

import { colors, spaces, typography } from '@/constants/theme';
import type { PostFrontMatter } from '@/utils/mdxUtils.server';

import Spacer from '../Spacer';

export interface PostCardProps {
  post: PostFrontMatter;
}

function PostCard({ post }: PostCardProps) {
  const { title, subTitle, description, date, category } = post;

  return (
    <Card>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {description && <Description>{description}</Description>}
      <Spacer size="xl" />
      <CardBottom>
        <CardBottomLeft></CardBottomLeft>
        <CardBottomRight>
          <DateText>{date}</DateText>
        </CardBottomRight>
      </CardBottom>
    </Card>
  );
}

const Card = styled.article``;

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

  font-variant-numeric: tabular-nums;
`;

export default PostCard;
