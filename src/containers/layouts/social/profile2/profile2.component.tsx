import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ProfileInfo,
  ProfileParameterCard,
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
          <Button
            style={themedStyle.followButton}
            onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <Text style={themedStyle.descriptionLabel}>{profile.about}</Text>
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
    backgroundColor: '#F7F8FA',
  },
  infoContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 24,
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
    fontSize: 14,
    fontFamily: 'opensans-extrabold',
  },
  descriptionLabel: {
    fontSize: 15,
    marginVertical: 24,
    color: '#8992A3',
  },
  profileSocials: {
    maxHeight: 256,
    paddingVertical: 24,
    flexDirection: 'column',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#A6AEBD',
    marginHorizontal: 24,
  },
  profileParameter: {
    marginVertical: 8,
  },
}));
