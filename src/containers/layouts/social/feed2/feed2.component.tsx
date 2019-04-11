import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Training } from '@src/core/model';
import { List } from '@kitten/ui';
import {
  Feed2ListItem,
  Feed2ListItemProps,
} from './feed2ListItem.component';

interface ComponentProps {
  trainings: Training[];
  onTrainingPress: (index: number) => void;
  onAddTrainingPress: (index: number) => void;
  onShareTrainingPress: (index: number) => void;
  onLikeTrainingPress: (index: number) => void;
}

export type Feed1Props = ThemedComponentProps & ComponentProps;

class Feed2Component extends React.Component<Feed1Props> {

  private onItemPress = (index: number) => {
    this.props.onTrainingPress(index);
  };

  private onItemAddPress = (index: number) => {
    this.props.onAddTrainingPress(index);
  };

  private onItemSharePress = (index: number) => {
    this.props.onShareTrainingPress(index);
  };

  private onItemLikePress = (index: number) => {
    this.props.onLikeTrainingPress(index);
  };

  private renderTrainingItemElement = (training: Training): React.ReactElement<Feed2ListItemProps> => {
    const { themedStyle } = this.props;

    return (
      <Feed2ListItem
        style={themedStyle.item}
        photo={{ uri: training.photo }}
        category={training.category}
        description={training.description}
        onPress={this.onItemPress}
        onAddPress={this.onItemAddPress}
        onSharePress={this.onItemSharePress}
        onLikePress={this.onItemLikePress}
      />
    );
  };

  private renderTrainingItem = (info: ListRenderItemInfo<Training>): React.ReactElement<Feed2ListItemProps> => {
    const { item, index } = info;

    const trainingElement: React.ReactElement<Feed2ListItemProps> = this.renderTrainingItemElement(item);

    return React.cloneElement(trainingElement, { index });
  };

  public render(): React.ReactNode {
    const { themedStyle, trainings } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={trainings}
        renderItem={this.renderTrainingItem}
      />
    );
  }
}

export const Feed2 = withStyles(Feed2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F8',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['color-white'],
  },
}));
