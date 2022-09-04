import styled from 'styled-components';

import { spaces } from '@/constants/theme';

export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

function Video({ ...rest }: VideoProps) {
  return <StyledVideo {...rest} controls autoPlay muted={true} loop playsInline />;
}

const StyledVideo = styled.video`
  margin-top: ${spaces.$2};
  margin-bottom: ${spaces.$2};
`;

export default Video;
