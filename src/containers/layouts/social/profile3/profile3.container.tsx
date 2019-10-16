import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  Profile,
  ProfileSocials,
} from '@src/core/model';
import {
  profile1,
  profileSocials1,
} from '@src/core/data/profile';
import { Profile3 } from './profile3.component';

interface State {
  profile: Profile;
  socials: ProfileSocials;
}

export class Profile3Container extends React.Component<NavigationStackScreenProps, State> {

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
      <Profile3
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
