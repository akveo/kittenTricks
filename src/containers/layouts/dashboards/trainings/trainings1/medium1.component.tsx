import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { Exercise } from '@src/core/model/exercise.model';
import { List } from '@kitten/ui';
import {
  TrainingCard1,
  TrainingCardProps,
} from '@src/components/trainings/trainingCard.component';

interface ComponentProps {
  exercises: Exercise[];
  onTrainingDuration: (index: number) => void;
}

export type Medium1ComponentProps = ThemedComponentProps & ComponentProps;

class Medium1Component extends React.Component<Medium1ComponentProps> {

  private onTrainingDuration = (index: number): void => {
    this.props.onTrainingDuration(index);
  };

  private renderCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
    return (
      <TrainingCard1
        style={this.props.themedStyle.card}
        training={info.item}
        onDuration={this.onTrainingDuration}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, exercises } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={exercises}
        renderItem={this.renderCard}
      />
    );
  }
}

export const Medium1 = withStyles(Medium1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
}));
