import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Profile,
  ProfileSocials,
} from '@src/core/model';
import {
  profile1,
  profileSocials1,
} from '@src/core/data/profile';
import { Profile2 } from './profile2.component';

interface State {
  profile: Profile;
  socials: ProfileSocials;
}

export class Profile2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
    socials: profileSocials1,
  };

  private onFollowPress = () => {
  };

  private onFollowersPress = () => {
  };

  private onFollowingPress = () => {
  };

  private onPostsPress = () => {
  };

  private onRateChange = (value: number) => {
  };

  public render(): React.ReactNode {
    return (
      <Profile2
        profile={this.state.profile}
        socials={this.state.socials}
        onFollowPress={this.onFollowPress}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onRateChange={this.onRateChange}
      />
    );
  }
}
