import React from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
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
  ImageOverlay,
  LikeButton,
  ShareButton,
  Text,
} from '@src/components/common';
import { PlusIcon } from '@src/assets/icons';
import { FeedItemBar } from '@src/components/social';

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

  private onAddPress = () => {
    this.props.onPress(this.props.index);
  };

  private onSharePress = () => {
    this.props.onPress(this.props.index);
  };

  private onLikePress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const {
      style,
      themedStyle,
      photo,
      category,
      description,
      ...restProps
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.photo}
          source={photo}>
          <Text style={themedStyle.categoryLabel}>{category}</Text>
        </ImageOverlay>
        <Text style={themedStyle.descriptionLabel}>{description}</Text>
        <FeedItemBar
          style={themedStyle.detailsBar}
          onSharePress={this.onSharePress}
          onLikePress={this.onLikePress}
          onAddPress={this.onAddPress}
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
    tintColor: '#FFFFFF',
  },
  categoryLabel: {
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 24,
    marginVertical: 24,
    fontFamily: 'anton-regular',
    fontSize: 32,
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginVertical: 24,
    fontFamily: 'opensans-semibold',
    color: '#0D1C2E',
  },
  detailsBar: {
    borderTopWidth: 1,
    borderTopColor: '#EDF0F5',
  },
}));
