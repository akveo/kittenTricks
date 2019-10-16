import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings1 } from './profileSettings1.component';

interface State {
  profile: Profile;
}

export class ProfileSettings1Container extends React.Component<NavigationStackScreenProps, State> {

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
      <ProfileSettings1
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}
