import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings2 } from './profileSettings2.component';

interface State {
  profile: Profile;
}

export class ProfileSettings2Container extends React.Component<NavigationScreenProps, State> {

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
      <ProfileSettings2
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
