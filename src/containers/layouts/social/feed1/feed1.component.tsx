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
  Feed1ListItem,
  Feed1ListItemProps,
} from './feed1ListItem.component';

interface ComponentProps {
  trainings: Training[];
  onTrainingPress: (index: number) => void;
  onAddTrainingPress: (index: number) => void;
  onShareTrainingPress: (index: number) => void;
  onLikeTrainingPress: (index: number) => void;
  onStyxTrainingPress: (index: number) => void;
}

export type Feed1Props = ThemedComponentProps & ComponentProps;

class Feed1Component extends React.Component<Feed1Props> {

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

  private onItemStyxPress = (index: number) => {
    this.props.onStyxTrainingPress(index);
  };

  private renderTrainingItemElement = (training: Training): React.ReactElement<Feed1ListItemProps> => {
    const { themedStyle } = this.props;

    return (
      <Feed1ListItem
        style={themedStyle.item}
        activeOpacity={0.95}
        photo={training.photo.imageSource}
        icon={training.icon.imageSource}
        category={training.category}
        time={`${training.time}h`}
        description={training.description}
        styx={`${training.styx} min`}
        onPress={this.onItemPress}
        onAddPress={this.onItemAddPress}
        onSharePress={this.onItemSharePress}
        onLikePress={this.onItemLikePress}
        onStyxPress={this.onItemStyxPress}
      />
    );
  };

  private renderTrainingItem = (info: ListRenderItemInfo<Training>): React.ReactElement<Feed1ListItemProps> => {
    const { item, index } = info;

    const trainingElement: React.ReactElement<Feed1ListItemProps> = this.renderTrainingItemElement(item);

    return React.cloneElement(trainingElement, { index });
  };

  public render(): React.ReactNode {
    const { themedStyle, trainings } = this.props;

    return (
      <List
        contentContainerStyle={themedStyle.container}
        data={trainings}
        renderItem={this.renderTrainingItem}
      />
    );
  }
}

export const Feed1 = withStyles(Feed1Component, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-basic-100'],
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    backgroundColor: theme['color-white'],
  },
}));
