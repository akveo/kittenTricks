import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ProfileInfo1,
  ProfileParameterCard,
  ProfileSocials,
} from '@src/components/social';
import {
  RateBar,
  textStyle,
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

export type Profile4Props = ThemedComponentProps & ComponentProps;

class Profile4Component extends React.Component<Profile4Props> {

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
          <ProfileInfo1
            photo={profile.photo.imageSource}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}>
            <RateBar
              style={themedStyle.rateBar}
              hint='Experience'
              value={3}
              onChange={this.onRateBarValueChange}
            />
          </ProfileInfo1>
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
            textStyle={textStyle.button}
            onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hintDark'
            category='s1'>
            {profile.about}
          </Text>
        </View>
        <View style={themedStyle.parameterContainer}>
          <ProfileParameterCard
            style={themedStyle.profileParameter}
            hint='Height'
            value={`${profile.height} cm`}
            icon={ArrowHeadUpIcon}
          />
          <ProfileParameterCard
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
    backgroundColor: theme['color-basic-100'],
  },
  infoContainer: {
    paddingHorizontal: 24,
    backgroundColor: theme['color-white'],
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
  },
  profileSocials: {
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  divider: {
    marginHorizontal: 24,
    borderWidth: 0.5,
    borderColor: theme['color-basic-500'],
  },
  descriptionLabel: {
    marginVertical: 24,
    ...textStyle.paragraph,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 12,
  },
}));
