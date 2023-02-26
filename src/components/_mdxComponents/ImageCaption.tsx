import Image from './Image';

interface ImageCaptionProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: string;
}

function ImageCaption({ children, src, alt, ...props }: ImageCaptionProps) {
  return (
    <figure className="my-4 w-full">
      <Image {...props} src={src} alt={alt} className="my-0" />
      <figcaption className="mt-2 truncate text-center text-sm opacity-50">{children}</figcaption>
    </figure>
  );
}

export default ImageCaption;
