import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfile1Component } from './editProfile1.component';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';

interface State {
  profile: Profile;
}

export class EditProfile1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
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
