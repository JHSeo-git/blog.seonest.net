import NextImage from 'next/image';
import styled from 'styled-components';

import { spaces } from '@/constants/theme';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, ...rest }: ImageProps) {
  if (!src) {
    return <StyledImage {...rest} loading="lazy" />;
  }

  if (src.startsWith('http')) {
    return <StyledImage src={src} {...rest} loading="lazy" />;
  }

  const width = 700;
  const height = 400;
  const alt = rest.alt ?? 'Image';

  return (
    <StyledNextImage
      {...rest}
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="empty"
    />
  );
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
