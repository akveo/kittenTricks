import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile2Component } from './editProfile2.component';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';

interface State {
  profile: Profile;
}

export class EditProfile2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
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
