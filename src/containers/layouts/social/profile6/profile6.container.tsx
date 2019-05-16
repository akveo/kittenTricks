import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  CategorisedProfileActivity,
  Post,
  Profile,
  ProfileSocials,
} from '@src/core/model';
import {
  categorisedProfileActivity1,
  profileSocials1,
  profile5,
} from '@src/core/data/profile';
import { Profile6 } from './profile6.component';
import { posts } from '@src/core/data/post';

interface State {
  profile: Profile;
  socials: ProfileSocials;
  activity: CategorisedProfileActivity;
  posts: Post[];
}

export class Profile6Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile5,
    socials: profileSocials1,
    activity: categorisedProfileActivity1,
    posts: posts,
  };

  private onFollowPress = () => {

  };

  private onMessagePress = () => {
    this.props.navigation.navigate('Chat 1');
  };

  private onFollowersPress = () => {

  };

  private onFollowingPress = () => {

  };

  private onPostsPress = () => {

  };

  private onPhotoPress = (index: number) => {

  };

  private onActivityLikePress = (index: number): void => {

  };

  public render(): React.ReactNode {
    return (
      <Profile6
        profile={this.state.profile}
        socials={this.state.socials}
        activity={this.state.activity}
        posts={this.state.posts}
        onFollowPress={this.onFollowPress}
        onMessagePress={this.onMessagePress}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onPhotoPress={this.onPhotoPress}
        onActivityLikePress={this.onActivityLikePress}
      />
    );
  }
}
