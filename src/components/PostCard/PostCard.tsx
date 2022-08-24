import styled from 'styled-components';

import { spaces, typography } from '@/constants/theme';

export interface PostCardProps {
  title: string;
}

function PostCard({ title }: PostCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.div`
  padding: ${spaces.$2};
`;

const Title = styled.h2`
  font-size: ${typography.fontSizes.h1};
  line-height: ${typography.lineHeight.heading};
`;

export default PostCard;
