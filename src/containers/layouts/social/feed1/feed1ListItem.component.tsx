import React from 'react';
import {
  Image,
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
import {
  Button,
  ImageOverlay,
  LikeButton,
  ShareButton,
  Text,
} from '@src/components/common';
import { Styx } from '@src/components/social';
import { PlusIcon } from '@src/assets/icons';
import { ButtonAlignments } from '@kitten/ui';

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

  private renderAddIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    const iconElement: React.ReactElement<ImageProps> = PlusIcon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style, themedStyle.addButtonIcon],
    });
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
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageOverlay
          style={themedStyle.photo}
          source={photo}>
          <View style={themedStyle.categoryContainer}>
            <View style={themedStyle.categoryInfoContainer}>
              <Image style={themedStyle.categoryIcon} source={icon}/>
              <Text style={themedStyle.categoryLabel}>{category}</Text>
            </View>
            <Text style={themedStyle.timeLabel}>{time}</Text>
          </View>
        </ImageOverlay>
        <View style={themedStyle.infoContainer}>
          <Styx
            value={styx}
            onPress={this.onStyxPress}
          />
          <Text style={themedStyle.descriptionLabel}>{description}</Text>
        </View>
        <View style={themedStyle.detailsContainer}>
          <View style={themedStyle.reactionContainer}>
            <ShareButton
              iconStyle={themedStyle.reactionButtonIcon}
              onPress={this.onSharePress}
            />
            <LikeButton
              iconStyle={themedStyle.reactionButtonIcon}
              onPress={this.onLikePress}
            />
          </View>
          <Button
            style={themedStyle.addButton}
            activeOpacity={0.65}
            size='giant'
            alignment={ButtonAlignments.RIGHT}
            icon={this.renderAddIcon}
            onPress={this.onAddPress}>
            Add Training
          </Button>
        </View>
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
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#EDF0F5',
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  photo: {
    minHeight: 220,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    tintColor: '#FFFFFF',
  },
  categoryLabel: {
    marginHorizontal: 8,
    fontFamily: 'anton-regular',
    fontSize: 20,
  },
  timeLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
  },
  descriptionLabel: {
    marginTop: 16,
    fontFamily: 'opensans-semibold',
    color: '#0D1C2E',
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

