import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ButtonAlignments } from '@kitten/ui';
import {
  Button,
  LikeButton,
  ShareButton,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';

interface ComponentProps {
  onSharePress: () => void;
  onLikePress: () => void;
  onAddPress: () => void;
}

export type FeedItemBarProps = ThemedComponentProps & ViewProps & ComponentProps;

class FeedItemBarComponent extends React.Component<FeedItemBarProps> {

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
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <View style={themedStyle.reactionContainer}>
          <ShareButton
            iconStyle={themedStyle.reactionButtonIcon}
            onPress={this.onShareButtonPress}
          />
          <LikeButton
            iconStyle={themedStyle.reactionButtonIcon}
            onPress={this.onLikeButtonPress}
          />
        </View>
        <Button
          style={themedStyle.addButton}
          activeOpacity={0.65}
          size='giant'
          alignment={ButtonAlignments.RIGHT}
          icon={this.renderAddIcon}
          onPress={this.onAddButtonPress}>
          Add Training
        </Button>
      </View>
    );
  }
}

export const FeedItemBar = withStyles(FeedItemBarComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reactionButtonIcon: {
    width: 24,
    height: 24,
  },
  addButton: {
    backgroundColor: 'transparent',
    fontFamily: 'opensans-extrabold',
    color: '#3366FF',
  },
  addButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#3366FF',
  },
}));
