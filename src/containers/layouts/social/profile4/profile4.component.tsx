import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ProfileInfo,
  ProfileParameter,
  ProfileSocials,
} from '@src/components/social';
import {
  Button,
  RateBar,
  Text,
} from '@src/components/common';
import {
  ArrowHeadDownIcon,
  ArrowHeadUpIcon,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
} from '@src/core/model';

interface ComponentProps {
  profile: ProfileModel;
  socials: ProfileSocialsModel;
  onFollowPress: () => void;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  onRateChange: (value: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class Profile4Component extends React.Component<Props> {

  private onFollowButtonPress = () => {
    this.props.onFollowPress();
  };

  private onFollowersButtonPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingButtonPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsButtonPress = () => {
    this.props.onPostsPress();
  };

  private onRateBarValueChange = (value: number) => {
    this.props.onRateChange(value);
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials } = this.props;

    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.infoContainer}>
          <ProfileInfo
            photo={{ uri: profile.photo }}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}>
            <RateBar
              style={themedStyle.rateBar}
              hint='Experience'
              value={3}
              onChange={this.onRateBarValueChange}
            />
          </ProfileInfo>
          <ProfileSocials
            style={themedStyle.profileSocials}
            followers={socials.followers}
            following={socials.following}
            posts={socials.posts}
            onFollowersPress={this.onFollowersButtonPress}
            onFollowingPress={this.onFollowingButtonPress}
            onPostsPress={this.onPostsButtonPress}
          />
          <Button
            style={themedStyle.followButton}
            onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <Text style={themedStyle.descriptionLabel}>{profile.about}</Text>
        </View>
        <View style={themedStyle.parameterContainer}>
          <ProfileParameter
            style={themedStyle.profileParameter}
            hint='Height'
            value={`${profile.height} cm`}
            icon={ArrowHeadUpIcon}
          />
          <ProfileParameter
            style={themedStyle.profileParameter}
            hint='Weight'
            value={`${profile.weight} kg`}
            icon={ArrowHeadDownIcon}
          />
        </View>
      </View>
    );
  }
}

export const Profile4 = withStyles(Profile4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: 44,
    backgroundColor: '#F7F8FA',
  },
  infoContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  parameterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    height: 40,
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'opensans-extrabold',
  },
  profileSocials: {
    marginTop: 24,
    justifyContent: 'space-evenly',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#A6AEBD',
    marginHorizontal: 24,
  },
  descriptionLabel: {
    marginVertical: 24,
    fontSize: 15,
    color: '#8992A3',
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 12,
  },
}));
