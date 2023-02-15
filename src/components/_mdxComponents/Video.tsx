import { cn } from '@/utils/style-utils';

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

function Video({ className, ...rest }: VideoProps) {
  return (
    <video
      controls
      autoPlay
      muted={true}
      loop
      playsInline
      className={cn('my-2', className)}
      {...rest}
    />
  );
}

export default Video;
