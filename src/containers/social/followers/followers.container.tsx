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
    loading: false,
  };

  public componentWillMount(): void {
    this.setLoading(true);
    fetch(usersApi)
      .then(data => data.json())
      .then(data => {
        this.setState({ followers: data.results });
        this.setLoading(false);
      });
  }

  private setLoading(loading: boolean): void {
    this.setState({ loading: loading });
  }

  public render(): React.ReactNode {
    return (
      <FollowersComponent
        followers={this.state.followers}
        loading={this.state.loading}/>
    );
  }
}
