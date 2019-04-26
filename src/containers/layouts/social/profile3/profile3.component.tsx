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

export type Profile3Props = ThemedComponentProps & ComponentProps;

class Profile3Component extends React.Component<Profile3Props> {

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
            photo={{ uri: profile.photo }}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}>
            <RateBar
              style={themedStyle.rateBar}
              hint='Experience'
              value={3}
              onChange={this.onRateBarValueChange}
            />
          </ProfileInfo1>
          <Button
            style={themedStyle.followButton}
            onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <View style={themedStyle.detailsContainer}>
            <ProfileSocials
              style={themedStyle.profileSocials}
              followers={socials.followers}
              following={socials.following}
              posts={socials.posts}
              onFollowersPress={this.onFollowersButtonPress}
              onFollowingPress={this.onFollowingButtonPress}
              onPostsPress={this.onPostsButtonPress}
            />
            <View style={themedStyle.divider}/>
            <Text
              style={themedStyle.descriptionLabel}
              appearance='hintDark'
              category='s1'>
              {profile.about}
            </Text>
          </View>
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

export const Profile3 = withStyles(Profile3Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
  infoContainer: {
    paddingHorizontal: 24,
    backgroundColor: theme['color-white'],
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
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
    marginTop: 24,
    fontSize: 14,
  },
  profileSocials: {
    flexDirection: 'column',
    minHeight: 176,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: theme['color-basic-500'],
    marginHorizontal: 24,
  },
  descriptionLabel: {
    flex: 1,
    ...textStyle.paragraph,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 12,
  },
}));
