import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { EditProfileComponent } from './editProfile.component';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export interface Profile {
  photo: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  email: string;
  phoneNumber: string;
}

interface State {
  profile: Profile;
}

export class EditProfileContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: initialProfile,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
  };

  public render(): React.ReactNode {
    return (
      <EditProfileComponent
        profile={this.state.profile}
        onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
        onButtonPress={this.onButtonPress}
      />
    );
  }
}

const initialProfile: Profile = {
  photo: 'https://randomuser.me/api/portraits/women/28.jpg',
  firstName: 'Jennifer',
  lastName: 'Austion',
  gender: Gender.FEMALE,
  age: 25,
  weight: 75,
  height: 174,
  email: 'jen.austion@gmail.com',
  phoneNumber: '+375 44 846 97 68',
};
