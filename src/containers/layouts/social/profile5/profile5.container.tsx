import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Profile } from '@src/core/model';
import { profile4 } from '@src/core/data/profile';
import { Profile5 } from './profile5.component';

interface State {
  profile: Profile;
}

export class Profile5Container extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    profile: profile4,
  };

  private onRateChange = (value: number) => {
  };

  public render(): React.ReactNode {
    return (
      <Profile5
        profile={this.state.profile}
        onRateChange={this.onRateChange}
      />
    );
  }
}
