import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  ProfileActivityList2,
  ProfileFriendList,
  ProfileInfo3,
  ProfileSocials,
} from '@src/components/social';
import { Text } from '@src/components/common';
import {
  MessageCircleIconFill,
  PersonAddIconFill,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
  ProfileActivity as ProfileActivityModel,
} from '@src/core/model';


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

  private backgroundImage: ImageSourcePropType = {
    uri: `https://images.unsplash.com/photo-1534067783941-51c9c23ecefd`,
  };

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
    return { uri: activity.source };
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials, activities } = this.props;

    return (
      <View style={themedStyle.container}>
        <ImageBackground
          style={themedStyle.profileInfoContainer}
          source={this.backgroundImage}>
          <ProfileInfo3
            photo={{ uri: profile.photo }}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}
          />
          <View style={themedStyle.actionContainer}>
            <Button
              style={themedStyle.followButton}
              icon={PersonAddIconFill}
              onPress={this.onFollowPress}>
              Follow
            </Button>
            <Button
              style={themedStyle.messageButton}
              status='white'
              icon={MessageCircleIconFill}
              onPress={this.onMessagePress}>
              Message
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
        </ImageBackground>
        <ScrollView>
          <View
            style={[themedStyle.profileSection, themedStyle.aboutSection]}>
            <Text style={themedStyle.profileSectionLabel}>About</Text>
            <Text style={[themedStyle.profileSectionContent, themedStyle.profileAboutLabel]}>{profile.about}</Text>
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
            <ProfileActivityList2
              contentContainerStyle={[themedStyle.profileSectionContent]}
              data={activities.map(this.createActivitySource)}
              onItemPress={this.onPhotoPress}
            />
          </View>
        </ScrollView>
      </View>
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
    color: theme['color-white'],
  },
  followButton: {
    flex: 1,
    marginRight: 4,
    textTransform: 'uppercase',
  },
  messageButton: {
    flex: 1,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  profileSectionLabel: {
    marginHorizontal: 16,
    fontSize: 15,
    fontFamily: 'opensans-semibold',
    color: theme['font-primary-color'],
  },
  aboutSection: {
    marginTop: 24,
  },
  profileAboutLabel: {
    marginHorizontal: 16,
    fontSize: 15,
    lineHeight: 20,
    color: theme['color-basic-600'],
  },
  friendsList: {
    paddingHorizontal: 12,
  },
}));
