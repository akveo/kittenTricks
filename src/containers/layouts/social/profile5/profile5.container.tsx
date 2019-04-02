import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Profile } from '@src/core/model';
import { Profile5 } from './profile5.component';
import { profile1 } from '@src/core/data/profile';

interface State {
  profile: Profile;
}

export class Profile5Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
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
