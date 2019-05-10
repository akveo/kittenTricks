import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { movie1 } from '@src/core/data/movie';
import { Movie as MovieModel } from '@src/core/model';
import { Movie } from './movieDetails.component';

interface State {
  movie: MovieModel;
}

export class MovieDetailsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    movie: movie1,
  };

  private onScreenshotPress = (index: number) => {
  };

  private onBuyTicketPress = () => {
    this.props.navigation.navigate('Payment');
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
