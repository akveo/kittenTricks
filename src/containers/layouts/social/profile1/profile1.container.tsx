import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Profile,
  ProfileSocials,
  Post,
} from '@src/core/model';
import {
  profile1,
  profileSocials1,
} from '@src/core/data/profile';
import { posts } from '@src/core/data/post';
import { Profile1 } from './profile1.component';

interface State {
  profile: Profile;
  socials: ProfileSocials;
  posts: Post[];
}

export class Profile1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
    socials: profileSocials1,
    posts: posts,
  };

  private onFollowersPress = () => {
  };

  private onFollowingPress = () => {
  };

  private onPostsPress = () => {
  };

  private onFollowPress = () => {
  };

  private onPostPress = (index: number) => {
  };

  private onPostLikePress = (index: number) => {
  };

  public render(): React.ReactNode {
    return (
      <Profile1
        profile={this.state.profile}
        socials={this.state.socials}
        posts={this.state.posts}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onFollowPress={this.onFollowPress}
        onPostPress={this.onPostPress}
        onPostLikePress={this.onPostLikePress}
      />
    );
  }
}
