import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Trainings1 } from './trainings1.component';
import { Exercise } from '@src/core/model/exercise.model';
import { exercises1 } from '@src/core/data/exercise';

interface State {
  selectedLevelIndex: number;
  exercises: Exercise[];
}

export class Trainings1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedLevelIndex: 0,
    exercises: exercises1,
  };

  private levels: string[] = ['EASY', 'MEDIUM', 'HARD'];

  private onSelectLevel = (index: number): void => {
    this.setState({ selectedLevelIndex: index });
  };

  private onTrainingDetails = (index: number): void => {

  };

  public render(): React.ReactNode {
    return (
      <Trainings1
        levels={this.levels}
        exercises={this.state.exercises}
        selectedLevelIndex={this.state.selectedLevelIndex}
        onTrainingDetails={this.onTrainingDetails}
        onSelectLevel={this.onSelectLevel}
      />
    );
  }
}
