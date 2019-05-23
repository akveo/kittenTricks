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

export type Profile2Props = ThemedComponentProps & ComponentProps;

class Profile2Component extends React.Component<Profile2Props> {

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
          <Button
            style={themedStyle.followButton}
            textStyle={textStyle.button}
            onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hint'
            category='s1'>
            {profile.about}
          </Text>
        </View>
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
      </View>
    );
  }
}

export const Profile2 = withStyles(Profile2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-color-default-1'],
  },
  infoContainer: {
    paddingHorizontal: 24,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: theme['background-color-default-2'],
  },
  parameterContainer: {
    flex: 1,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    height: 40,
    marginTop: 24,
  },
  descriptionLabel: {
    marginVertical: 24,
    ...textStyle.paragraph,
  },
  profileSocials: {
    flexDirection: 'column',
    paddingVertical: 24,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: theme['border-color-default-3'],
    marginHorizontal: 24,
    marginVertical: 8,
  },
  profileParameter: {
    backgroundColor: theme['background-color-default-1'],
    marginVertical: 8,
  },
}));
