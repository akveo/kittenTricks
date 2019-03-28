import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile1Component } from './editProfile1.component';
import {
  Profile1,
  ProfileType,
} from '../common';

interface State {
  profile: ProfileType;
}

export class EditProfile1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: Profile1,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
  };

  public render(): React.ReactNode {
    return (
      <EditProfile1Component
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
