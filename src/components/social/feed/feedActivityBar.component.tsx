import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ButtonIconAlignments } from '@kitten/ui';
import {
  ActivityBar,
  ActivityBarProps,
  Button,
  LikeButton,
  ReactionBar,
  ShareButton,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onSharePress: () => void;
  onLikePress: () => void;
  onAddPress: () => void;
}

export type FeedActivityBarProps = ThemedComponentProps & ActivityBarProps & ComponentProps;

class FeedActivityBarComponent extends React.Component<FeedActivityBarProps> {

  private onShareButtonPress = () => {
    this.props.onSharePress();
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress();
  };

  private onAddButtonPress = () => {
    this.props.onAddPress();
  };

  private renderAddIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    const iconElement: React.ReactElement<ImageProps> = PlusIcon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style, themedStyle.addButtonIcon],
    });
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <ActivityBar {...restProps}>
        <ReactionBar>
          <ShareButton
            style={themedStyle.reactionButton}
            onPress={this.onShareButtonPress}
          />
          <LikeButton
            style={themedStyle.reactionButton}
            onPress={this.onLikeButtonPress}
          />
        </ReactionBar>
        <Button
          style={themedStyle.addButton}
          activeOpacity={0.65}
          size='giant'
          iconAlignment={ButtonIconAlignments.RIGHT}
          icon={this.renderAddIcon}
          onPress={this.onAddButtonPress}>
          Add Training
        </Button>
      </ActivityBar>
    );
  }
}

export const FeedActivityBar = withStyles(FeedActivityBarComponent, (theme: ThemeType) => ({
  reactionButton: {
    marginHorizontal: 8,
  },
  addButton: {
    backgroundColor: theme['opacity-transparent'],
    fontFamily: 'opensans-extrabold',
    color: theme['color-primary-500'],
  },
  addButtonIcon: {
    width: 24,
    height: 24,
    tintColor: theme['color-primary-500'],
  },
}));
