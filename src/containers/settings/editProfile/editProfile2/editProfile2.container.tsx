import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile2Component } from './editProfile2.component';
import {
  Profile1,
  ProfileType,
} from '../common';

interface State {
  profile: ProfileType;
}

export class EditProfile2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: Profile1,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
  };

  public render(): React.ReactNode {
    return (
      <EditProfile2Component
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
