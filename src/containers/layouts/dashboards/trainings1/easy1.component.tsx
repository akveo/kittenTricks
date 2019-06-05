import React from 'react';
import {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
  StyleType,
} from '@kitten/theme';
import { Exercise } from '@src/core/model/exercise.model';
import {
  TrainingCard1,
  TrainingCardProps,
} from '@src/components/trainings/trainingCard.component';
import {
  List,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  exercises: Exercise[];
  onTrainingDetails: (index: number) => void;
}

interface State {
  selectedExerciseIndex: number;
}

export type Easy1ComponentProps = ThemedComponentProps & ComponentProps;

class Easy1Component extends React.Component<Easy1ComponentProps, State> {

  public state: State = {
    selectedExerciseIndex: 0,
  };

  private onExerciseListScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { themedStyle } = this.props;

    const { x: xOffset } = event.nativeEvent.contentOffset;
    const { width: itemWidth } = themedStyle.pagerCard;

    const selectedExerciseIndex: number = Math.round(xOffset / itemWidth);

    if (selectedExerciseIndex !== this.state.selectedExerciseIndex) {
      this.setState({ selectedExerciseIndex });
    }
  };

  private onTrainingDetails = (index: number): void => {
    this.props.onTrainingDetails(index);
  };

  private renderPagerIndicator = (index: number): React.ReactElement<ViewProps> => {
    const { themedStyle, exercises } = this.props;
    const additionalStyle: StyleType = index === this.state.selectedExerciseIndex ?
      themedStyle.pagerIndicatorSelected : null;
    const marginStyle: StyleType = index === exercises.length - 1 ?
      null : themedStyle.indicatorMarginRight;

    return (
      <View
        style={[themedStyle.pagerIndicator, additionalStyle, marginStyle]}
        key={index}
      />
    );
  };

  private renderPagerCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
    const { themedStyle, exercises } = this.props;

    const marginStyle: StyleType = info.index === exercises.length - 1 ?
      null : themedStyle.pagerCardMargin;

    return (
      <TrainingCard1
        index={info.index}
        style={[themedStyle.pagerCard, marginStyle]}
        training={info.item}
        onDetails={this.onTrainingDetails}
      />
    );
  };

  private renderPager = (): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View>
        <List
          style={themedStyle.pagerContainer}
          horizontal={true}
          renderItem={this.renderPagerCard}
          data={this.props.exercises}
          showsHorizontalScrollIndicator={false}
          onScroll={this.onExerciseListScroll}
        />
        <View style={themedStyle.pagerIndicatorContainer}>
          {this.props.exercises
               .map((item: Exercise, i: number) => this.renderPagerIndicator(i))}
        </View>
      </View>
    );
  };

  private renderListCard = (info: ListRenderItemInfo<Exercise>): React.ReactElement<TrainingCardProps> => {
    return (
      <TrainingCard1
        style={this.props.themedStyle.listCard}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, exercises } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <Text
          style={themedStyle.pagerLabel}
          appearance='hint'>
          MOST POPULAR
        </Text>
        {this.renderPager()}
        <List
          data={exercises}
          renderItem={this.renderListCard}
        />
      </ScrollView>
    );
  }
}

export const Easy1 = withStyles(Easy1Component, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pagerContainer: {
    marginVertical: 8,
  },
  pagerLabel: {
    marginVertical: 16,
    ...textStyle.paragraph,
  },
  pagerCard: {
    width: 226,
  },
  listCard: {
    marginVertical: 8,
  },
  pagerCardMargin: {
    marginRight: 16,
  },
  pagerIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  pagerIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme['background-basic-color-3'],
  },
  pagerIndicatorSelected: {
    backgroundColor: theme['background-basic-color-4'],
  },
  indicatorMarginRight: {
    marginRight: 12,
  },
}));
