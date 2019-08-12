import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Exercise } from '@src/core/model/exercise.model';
import { ListRenderItemInfo } from 'react-native';
import { List } from '@kitten/ui';
import {
  TrainingCard3,
  TrainingCardProps,
} from '@src/components/trainings/trainingCard3.component';

interface ComponentProps {
  exercises: Exercise[];
  onTrainingDetails: (index: number) => void;
  onTrainingTiming: (index: number) => void;
  onTrainingEnergy: (index: number) => void;
}

export type Trainings2ComponentProps = ThemedComponentProps & ComponentProps;

class Trainings2Component extends React.Component<Trainings2ComponentProps> {

  private onTrainingDetails = (index: number): void => {
    this.props.onTrainingDetails(index);
  };

  private onTrainingTiming = (index: number): void => {
    this.props.onTrainingTiming(index);
  };

  private onTrainingEnergy = (index: number): void => {
    this.props.onTrainingEnergy(index);
  };

  private renderCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
    return (
      <TrainingCard3
        style={this.props.themedStyle.item}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
        onTiming={this.onTrainingTiming}
        onEnergy={this.onTrainingEnergy}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, exercises } = this.props;

    return (
      <List
        contentContainerStyle={themedStyle.container}
        data={exercises}
        renderItem={this.renderCard}
      />
    );
  }
}

export const Trainings2 = withStyles(Trainings2Component, (theme: ThemeType) => ({
  container: {
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
