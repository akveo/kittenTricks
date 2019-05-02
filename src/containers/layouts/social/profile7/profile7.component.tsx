import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  View,
} from 'react-native';
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
  ProfileActivityList3,
  ProfileFriendList,
  ProfileInfo3,
  ProfileSocials,
} from '@src/components/social';
import {
  MessageCircleIconFill,
  PersonAddIconFill,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
  ProfileActivity as ProfileActivityModel,
} from '@src/core/model';
import {
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import { backgroundImage } from '@src/assets/images';

interface ComponentProps {
  profile: ProfileModel;
  socials: ProfileSocialsModel;
  activities: ProfileActivityModel[];
  onFollowPress: () => void;
  onMessagePress: () => void;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  onFriendPress: (index: number) => void;
  onPhotoPress: (index: number) => void;
}

export type Profile7Props = ThemedComponentProps & ComponentProps;

class Profile7Component extends React.Component<Profile7Props> {

  private onFollowPress = () => {
    this.props.onFollowPress();
  };

  private onMessagePress = () => {
    this.props.onMessagePress();
  };

  private onFollowersPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsPress = () => {
    this.props.onPostsPress();
  };

  private onFriendPress = (index: number) => {
    this.props.onFriendPress(index);
  };

  private onPhotoPress = (index: number) => {
    this.props.onPhotoPress(index);
  };

  private createActivitySource = (activity: ProfileActivityModel): ImageSourcePropType => {
    return activity.source;
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials, activities } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.profileInfoContainer}
          source={backgroundImage}>
          <ProfileInfo3
            photo={{ uri: profile.photo }}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}
          />
          <View style={themedStyle.actionContainer}>
            <Button
              style={themedStyle.followButton}
              textStyle={textStyle.button}
              icon={PersonAddIconFill}
              onPress={this.onFollowPress}>
              FOLLOW
            </Button>
            <Button
              style={themedStyle.messageButton}
              textStyle={textStyle.button}
              status='white'
              icon={MessageCircleIconFill}
              onPress={this.onMessagePress}>
              MESSAGE
            </Button>
          </View>
          <ProfileSocials
            style={themedStyle.profileSocials}
            textStyle={themedStyle.socialsLabel}
            followers={socials.followers}
            following={socials.following}
            posts={socials.posts}
            onFollowersPress={this.onFollowersPress}
            onFollowingPress={this.onFollowingPress}
            onPostsPress={this.onPostsPress}
          />
        </ImageOverlay>
        <View
          style={[themedStyle.profileSection, themedStyle.aboutSection]}>
          <Text
            style={themedStyle.profileSectionLabel}
            category='s1'>
            About
          </Text>
          <Text
            style={[themedStyle.profileSectionContent, themedStyle.profileAboutLabel]}
            appearance='hintDark'>
            {profile.about}
          </Text>
        </View>
        <View style={[themedStyle.profileSection, themedStyle.friendsSection]}>
          <Text style={[themedStyle.profileSectionLabel, themedStyle.friendsSectionLabel]}>Friends</Text>
          <ProfileFriendList
            contentContainerStyle={[themedStyle.profileSectionContent, themedStyle.friendsList]}
            data={profile.friends}
            onItemPress={this.onFriendPress}
          />
        </View>
        <View style={themedStyle.profileSection}>
          <Text style={themedStyle.profileSectionLabel}>Shots</Text>
          <ProfileActivityList3
            contentContainerStyle={[themedStyle.profileSectionContent]}
            data={activities.map(this.createActivitySource)}
            onItemPress={this.onPhotoPress}
          />
        </View>
      </ScrollView>
    );
  }
}

export const Profile7 = withStyles(Profile7Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  profileInfoContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: theme['color-basic-100'],
  },
  profileSocials: {
    justifyContent: 'space-evenly',
    marginTop: 24,
    paddingVertical: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  profileSection: {
    marginTop: 32,
  },
  profileSectionContent: {
    marginTop: 8,
  },
  socialsLabel: {
    color: theme['font-light-color'],
  },
  followButton: {
    flex: 1,
    marginRight: 4,
  },
  messageButton: {
    flex: 1,
    marginLeft: 4,
  },
  profileSectionLabel: {
    marginHorizontal: 16,
    ...textStyle.subtitle,
  },
  aboutSection: {
    marginTop: 24,
  },
  profileAboutLabel: {
    marginHorizontal: 16,
    ...textStyle.paragraph,
  },
  shotsSection: {
    marginBottom: 32,
  },
  friendsList: {
    paddingHorizontal: 12,
  },
}));
