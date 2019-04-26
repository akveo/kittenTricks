import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import {
  FeedActivityBar,
  Styx,
} from '@src/components/social';
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
  icon: ImageSourcePropType;
  category: React.ReactText;
  time: React.ReactText;
  description: React.ReactText;
  styx?: React.ReactText;
  onPress: (index: number) => void;
  onAddPress: (index: number) => void;
  onSharePress: (index: number) => void;
  onLikePress: (index: number) => void;
  onStyxPress: (index: number) => void;
}

export type Feed1ListItemProps = ThemedComponentProps & ComponentProps;

class Feed1ListItemComponent extends React.Component<Feed1ListItemProps> {

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

  private onStyxPress = () => {
    this.props.onStyxPress(this.props.index);
  };

  public render(): React.ReactNode {
    const {
      style,
      themedStyle,
      photo,
      icon,
      category,
      time,
      description,
      styx,
      ...restProps
    } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.photo}
          source={photo}>
          <View style={themedStyle.categoryContainer}>
            <View style={themedStyle.categoryInfoContainer}>
              <Image style={themedStyle.categoryIcon} source={icon}/>
              <Text
                style={themedStyle.categoryLabel}
                appearance='light'
                category='h6'>
                {category}
              </Text>
            </View>
            <Text
              style={themedStyle.timeLabel}
              appearance='light'>
              {time}
            </Text>
          </View>
        </ImageOverlay>
        <View style={themedStyle.infoContainer}>
          <Styx
            value={styx}
            onPress={this.onStyxPress}
          />
          <Text style={themedStyle.descriptionLabel}>{description}</Text>
        </View>
        <FeedActivityBar
          style={themedStyle.activityContainer}
          onSharePress={this.onSharePress}
          onLikePress={this.onLikePress}
          onAddPress={this.onAddPress}
        />
      </TouchableOpacity>
    );
  }
}

export const Feed1ListItem = withStyles(Feed1ListItemComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  activityContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: theme['color-basic-200'],
  },
  photo: {
    minHeight: 220,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    tintColor: theme['color-white'],
  },
  categoryLabel: {
    marginHorizontal: 8,
    ...textStyle.headline,
  },
  timeLabel: textStyle.subtitle,
  descriptionLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
}));

