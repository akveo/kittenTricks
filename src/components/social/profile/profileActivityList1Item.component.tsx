import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ActivityAuthoring } from '@src/components/common';
import { ProfileActivityBar } from './profileActivityBar.component';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  photo: ImageSourcePropType;
  profilePhoto: ImageSourcePropType;
  authorName: string;
  date: string;
  likes: number;
  onPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type ProfileActivityList1ItemProps = ThemedComponentProps & ComponentProps;

class ProfileActivityList1ItemComponent extends React.Component<ProfileActivityList1ItemProps> {

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
        <ImageBackground
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

export const ProfileActivityList1Item = withStyles(ProfileActivityList1ItemComponent, (theme: ThemeType) => ({
  container: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  photo: {
    minHeight: 220,
  },
}));
