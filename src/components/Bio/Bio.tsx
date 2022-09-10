import NextImage from 'next/future/image';
import styled from 'styled-components';

import appConfig from '@/app.config';
import { colors, radii, spaces, typography } from '@/constants/theme';

function Bio() {
  return (
    <BioWrapper>
      <Avatar src={appConfig.avatar} alt="Avatar" width={100} height={100} placeholder="empty" />
      <Profile>
        <ProfileAuthor>
          <Author>{appConfig.author}</Author>
        </ProfileAuthor>
        <ProfileDescription>{appConfig.bio}</ProfileDescription>
        <ProfileSocialWrapper>
          <ProfileSocial
            href={`https://github.com/${appConfig.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </ProfileSocial>
          <ProfileSocial
            href={`https://twitter.com/${appConfig.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </ProfileSocial>
        </ProfileSocialWrapper>
      </Profile>
    </BioWrapper>
  );
}

const BioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled(NextImage)`
  border-radius: ${radii.round};
  background-color: ${colors.sky3};
`;

const Profile = styled.div`
  margin-left: ${spaces.$4};
`;

const ProfileAuthor = styled.p`
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.primary900};
`;

const Author = styled.span`
  padding: ${spaces.$1} ${spaces.$2};
  background-color: ${colors.primary900};
  color: ${colors.loContrast};
  border-radius: ${radii.base};
  font-size: ${typography.fontSizes.sm};
`;

const ProfileDescription = styled.p`
  margin-top: ${spaces.$2};

  font-size: ${typography.fontSizes.sm};
  color: ${colors.gray11};
`;

const ProfileSocialWrapper = styled.div`
  margin-top: ${spaces.$1};

  display: flex;
  align-items: center;
  gap: ${spaces.$2};
`;

const ProfileSocial = styled.a`
  font-weight: ${typography.fontWeights.bold};
  font-size: ${typography.fontSizes.sm};
  color: ${colors.primary1100};
`;

export default Bio;
