import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { movie1 } from '@src/core/data/movie';
import { Movie as MovieModel } from '@src/core/model';
import { Movie } from './movieDetails.component';

interface State {
  movie: MovieModel;
}

export class MovieDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    movie: movie1,
  };

  private navigationKey: string = 'MovieDetailsContainer';

  private onScreenshotPress = (index: number) => {
  };

  private onBuyTicketPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Payment',
    });
  };

  public render(): React.ReactNode {
    return (
      <Movie
        movie={this.state.movie}
        onBuyTicket={this.onBuyTicketPress}
        onScreenshotPress={this.onScreenshotPress}
      />
    );
  }
}
