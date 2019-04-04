import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Training } from '@src/core/model';
import { trainings } from '@src/core/data/training';
import { Feed2 } from './feed2.component';

interface State {
  trainings: Training[];
}

export class Feed2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    trainings: trainings,
  };

  private onTrainingPress = (index: number) => {

  };

  private onAddTrainingPress = (index: number) => {

  };

  private onShareTrainingPress = (index: number) => {

  };

  private onLikeTrainingPress = (index: number) => {

  };

  public render(): React.ReactNode {
    return (
      <Feed2
        trainings={this.state.trainings}
        onTrainingPress={this.onTrainingPress}
        onAddTrainingPress={this.onAddTrainingPress}
        onShareTrainingPress={this.onShareTrainingPress}
        onLikeTrainingPress={this.onLikeTrainingPress}
      />
    );
  }
}
