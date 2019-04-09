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
import { ProfileActivityBar } from '@src/components/social';
import {
  ActivityAuthoring,
  ImageOverlay,
} from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  photo: ImageSourcePropType;
  profilePhoto: ImageSourcePropType;
  authorName: React.ReactText;
  date: React.ReactText;
  likes: React.ReactText;
  onPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type Profile1ListItemProps = ThemedComponentProps & ComponentProps;

class Profile1ListItemComponent extends React.Component<Profile1ListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress(this.props.index);
  };

  public render(): React.ReactNode {
    const {
      style,
      themedStyle,
      onPress,
      photo,
      profilePhoto,
      authorName,
      date,
      likes,
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
          source={photo}
        />
        <ProfileActivityBar
          style={themedStyle.detailsContainer}
          likes={likes}
          onLikePress={this.onLikeButtonPress}>
          <ActivityAuthoring
            photo={profilePhoto}
            name={authorName}
            date={date}
          />
        </ProfileActivityBar>
      </TouchableOpacity>
    );
  }
}

export const Profile1ListItem = withStyles(Profile1ListItemComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: theme['color-white'],
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  photo: {
    minHeight: 220,
  },
}));
