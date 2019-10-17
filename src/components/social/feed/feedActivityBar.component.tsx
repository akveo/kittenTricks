import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  ActivityBar,
  ActivityBarProps,
  LikeButton,
  ReactionBar,
  ShareButton,
  textStyle,
} from '@src/components/common';
import { PlusIconFill } from '@src/assets/icons';

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

    const iconElement: React.ReactElement<ImageProps> = PlusIconFill(style);

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
          textStyle={textStyle.button}
          appearance='ghost'
          size='giant'
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
    flex: 1,
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  addButtonIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 0,
  },
}));
