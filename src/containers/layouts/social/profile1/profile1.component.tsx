import React from 'react';
import {
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ProfileInfo1,
  ProfileSocials,
} from '@src/components/social';
import { ProfileActivityList1 } from '@src/components/social';
import { Button } from '@src/components/common';
import {
  Profile as ProfileModel,
  ProfileSocials as ProfileSocialsModel,
  Post as PostModel,
} from '@src/core/model';

interface ComponentProps {
  profile: ProfileModel;
  socials: ProfileSocialsModel;
  posts: PostModel[];
  onFollowPress: () => void;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  onPostPress: (index: number) => void;
  onPostLikePress: (index: number) => void;
}

export type Profile1Props = ThemedComponentProps & ComponentProps;

class Profile1Component extends React.Component<Profile1Props> {

  private onFollowersButtonPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingButtonPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsButtonPress = () => {
    this.props.onPostsPress();
  };

  private onFollowButtonPress = () => {
    this.props.onFollowPress();
  };

  private onItemPress = (index: number) => {
    this.props.onPostPress(index);
  };

  private onItemLikePress = (index: number) => {
    this.props.onPostLikePress(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials, posts } = this.props;

    return (
      <View style={themedStyle.container}>
        <ProfileInfo1
          style={themedStyle.profileInfo}
          photo={{ uri: profile.photo }}
          name={`${profile.firstName} ${profile.lastName}`}
          location={profile.location}>
          <View style={themedStyle.parametersContainer}>
            <ProfileSocials
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
          </View>
        </ProfileInfo1>
        <ProfileActivityList1
          style={themedStyle.feed}
          data={posts}
          onItemPress={this.onItemPress}
          onItemLikePress={this.onItemLikePress}
        />
      </View>
    );
  }
}

export const Profile1 = withStyles(Profile1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  parametersContainer: {
    marginTop: 24,
  },
  profileInfo: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  followButton: {
    height: 40,
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'opensans-extrabold',
  },
  feed: {
    backgroundColor: '#F4F5F8',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
}));

