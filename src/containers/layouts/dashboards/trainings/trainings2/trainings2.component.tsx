import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { Exercise } from '@src/core/model/exercise.model';
import {
  View,
  ListRenderItemInfo,
} from 'react-native';
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
        style={this.props.themedStyle.listCard}
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
      <View style={themedStyle.container}>
        <List
          data={exercises}
          renderItem={this.renderCard}
        />
      </View>
    );
  }
}

export const Trainings2 = withStyles(Trainings2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
    paddingTop: 16,
  },
  listCard: {
    marginBottom: 16,
  },
}));
