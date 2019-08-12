import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings3 } from './profileSettings3.component';

interface State {
  profile: Profile;
}

export class ProfileSettings3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <ProfileSettings3
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
