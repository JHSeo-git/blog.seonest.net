import NextImage from 'next/future/image';
import styled from 'styled-components';

import { spaces } from '@/constants/theme';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, ...rest }: ImageProps) {
  if (!src) {
    return <StyledImage {...rest} />;
  }

  if (src.startsWith('http')) {
    return <StyledImage src={src} {...rest} />;
  }

  return <StyledNextImage src={src} {...rest} placeholder="empty" />;
}

const StyledImage = styled.img`
  margin-top: ${spaces.xl};
  margin-bottom: ${spaces.xl};
`;

const StyledNextImage = styled(NextImage)``;

export default Image;
