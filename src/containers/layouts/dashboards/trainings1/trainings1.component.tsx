import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  TabView,
  Tab,
} from '@kitten/ui';
import { Easy1 } from './easy1.component';
import { Medium1 } from './medium1.component';
import { Hard1 } from './hard1.component';
import { Exercise } from '@src/core/model/exercise.model';

interface ComponentProps {
  levels: string[];
  exercises: Exercise[];
  selectedLevelIndex: number;
  onTrainingDetails: (index: number) => void;
  onSelectLevel: (index: number) => void;
}

export type Trainings1ComponentProps = ThemedComponentProps & ComponentProps;

class Trainings1Component extends React.Component<Trainings1ComponentProps> {

  private onTrainingDetails = (index: number): void => {
    this.props.onTrainingDetails(index);
  };

  private onSelectLevel = (index: number): void => {
    this.props.onSelectLevel(index);
  };

  private shouldLoadComponent = (index: number): boolean => {
    return index === this.props.selectedLevelIndex;
  };

  public render(): React.ReactNode {
    const { themedStyle, selectedLevelIndex, levels, exercises } = this.props;
    const { [0]: easyLevel, [1]: mediumLevel, [2]: hardLevel } = levels;

    return (
      <TabView
        style={themedStyle.container}
        selectedIndex={selectedLevelIndex}
        onSelect={this.onSelectLevel}
        shouldLoadComponent={this.shouldLoadComponent}>
        <Tab title={easyLevel}>
          <Easy1
            exercises={exercises}
            onTrainingDetails={this.onTrainingDetails}
          />
        </Tab>
        <Tab title={mediumLevel}>
          <Medium1
            exercises={exercises}
            onTrainingDetails={this.onTrainingDetails}
          />
        </Tab>
        <Tab title={hardLevel}>
          <Hard1
            exercises={exercises}
            onTrainingDetails={this.onTrainingDetails}
          />
        </Tab>
      </TabView>
    );
  }
}

export const Trainings1 = withStyles(Trainings1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
