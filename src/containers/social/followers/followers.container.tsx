import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { FollowersComponent } from './followers.component';

const usersApi: string = 'https://randomuser.me/api/?results=30';

export interface Follower {
  name: any;
  location: any;
  picture: any;
}

interface State {
  loading: boolean;
  followers: Follower[];
}

export class FollowersContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    followers: [],
    loading: true,
  };

  private onFollowersLoaded = (data) => {
    this.setState({
      followers: data.results,
      loading: false,
    });
  };

  public componentWillMount() {
    fetch(usersApi)
      .then(data => data.json())
      .then(this.onFollowersLoaded);
  }

  public render(): React.ReactNode {
    return (
      <FollowersComponent
        followers={this.state.followers}
        loading={this.state.loading}
      />
    );
  }
}
