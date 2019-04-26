import React from 'react';
import {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { FeedActivityBar } from '@src/components/social';
import {
  ImageOverlay,
  textStyle,
} from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  photo: ImageSourcePropType;
  category: React.ReactText;
  description: React.ReactText;
  onPress: (index: number) => void;
  onAddPress: (index: number) => void;
  onSharePress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type Feed2ListItemProps = ThemedComponentProps & ComponentProps;

class Feed2ListItemComponent extends React.Component<Feed2ListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onAddButtonPress = () => {
    this.props.onPress(this.props.index);
  };

  private onShareButtonPress = () => {
    this.props.onPress(this.props.index);
  };

  private onLikeButtonPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, photo, category, description, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.photo}
          source={photo}>
          <Text
            style={themedStyle.categoryLabel}
            appearance='light'
            category='h4'>
            {category}
          </Text>
        </ImageOverlay>
        <Text style={themedStyle.descriptionLabel}>{description}</Text>
        <FeedActivityBar
          style={themedStyle.activityContainer}
          onSharePress={this.onShareButtonPress}
          onLikePress={this.onLikeButtonPress}
          onAddPress={this.onAddButtonPress}
        />
      </TouchableOpacity>
    );
  }
}

export const Feed2ListItem = withStyles(Feed2ListItemComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  photo: {
    minHeight: 220,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    tintColor: theme['color-white'],
  },
  categoryLabel: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 24,
    marginVertical: 24,
    ...textStyle.headline,
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginVertical: 24,
    ...textStyle.subtitle,
  },
  activityContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: theme['color-basic-200'],
  },
}));
