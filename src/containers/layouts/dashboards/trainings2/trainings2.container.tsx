import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Trainings2 } from './trainings2.component';
import { Exercise } from '@src/core/model/exercise.model';
import { exercises2 } from '@src/core/data/exercise';

interface State {
  exercises: Exercise[];
}

export class Trainings2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    exercises: exercises2,
  };

  private onTrainingDetails = (index: number): void => {

  };

  private onTrainingTiming = (index: number): void => {

  };

  private onTrainingEnergy = (index: number): void => {

  };

  public render(): React.ReactNode {
    return (
      <Trainings2
        exercises={this.state.exercises}
        onTrainingDetails={this.onTrainingDetails}
        onTrainingTiming={this.onTrainingTiming}
        onTrainingEnergy={this.onTrainingEnergy}
      />
    );
  }
}
