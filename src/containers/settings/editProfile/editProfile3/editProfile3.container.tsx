import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile3Component } from './editProfile3.component';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';

interface State {
  profile: Profile;
}

export class EditProfile3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
  };

  public render(): React.ReactNode {
    return (
      <EditProfile3Component
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
