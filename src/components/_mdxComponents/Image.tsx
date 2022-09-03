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

  const width = 700;
  const height = 400;

  return <StyledNextImage src={src} width={width} height={height} {...rest} placeholder="empty" />;
}

const StyledImage = styled.img`
  margin-top: ${spaces.xl};
  margin-bottom: ${spaces.xl};
  margin-left: auto;
  margin-right: auto;
`;

const StyledNextImage = styled(NextImage)`
  margin-top: ${spaces.xl};
  margin-bottom: ${spaces.xl};
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Image;
