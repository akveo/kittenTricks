import React from 'react';
import {
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
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
      <View style={themedStyle.wrapper}>
        <List
          style={themedStyle.container}
          data={exercises}
          renderItem={this.renderCard}
        />
      </View>
    );
  }
}

export const Hard1 = withStyles(Hard1Component, (theme: ThemeType) => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
}));
