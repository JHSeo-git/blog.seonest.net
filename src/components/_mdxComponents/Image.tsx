import NextImage from 'next/image';

import { cn } from '@/utils/styleUtils';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, className, ...rest }: ImageProps) {
  if (!src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={rest.alt}
        className={cn('my-4 mx-auto w-full h-full object-contain', className)}
        loading="lazy"
        {...rest}
      />
    );
  }

  if (src.startsWith('http')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={rest.alt}
        className={cn('my-4 mx-auto w-full h-full object-contain', className)}
        loading="lazy"
        {...rest}
      />
    );
  }

  const width = 700;
  const height = 400;
  const alt = rest.alt ?? 'Image';

  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn('my-4 mx-auto w-full h-full object-contain', className)}
      {...rest}
      width={width}
      height={height}
      placeholder="empty"
    />
  );
}

export default Image;
