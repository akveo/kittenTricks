import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Exercise } from '@src/core/model/exercise.model';
import { List } from '@kitten/ui';
import {
  TrainingCard2,
  TrainingCardProps,
} from '@src/components/trainings/trainingCard2.component';

interface ComponentProps {
  exercises: Exercise[];
  onTrainingDetails: (index: number) => void;
}

export type Hard1ComponentProps = ThemedComponentProps & ComponentProps;

class Hard1Component extends React.Component<Hard1ComponentProps> {

  private onTrainingDetails = (index: number): void => {
    this.props.onTrainingDetails(index);
  };

  private renderCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
    return (
      <TrainingCard2
        style={this.props.themedStyle.card}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
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

export const Hard1 = withStyles(Hard1Component, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
}));
