import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile3Component } from './editProfile3.component';
import {
  Profile1,
  ProfileType,
} from '../common';

interface State {
  profile: ProfileType;
}

export class EditProfile3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: Profile1,
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
