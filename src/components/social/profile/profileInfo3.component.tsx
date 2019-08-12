import React from 'react';
import {
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { PinIconOutline } from '@src/assets/icons';
import { ProfileLocation } from './profileLocation.component';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: string;
  location: string;
}

export type ProfileInfo3Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileInfo3Component extends React.Component<ProfileInfo3Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, location, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Avatar
          style={themedStyle.profileAvatar}
          source={photo}
        />
        <Text
          style={themedStyle.nameLabel}
          category='h6'>
          {name}
        </Text>
        <ProfileLocation
          iconStyle={themedStyle.locationIcon}
          textStyle={themedStyle.locationLabel}
          icon={PinIconOutline}>
          {location}
        </ProfileLocation>
      </View>
    );
  }
}

export const ProfileInfo3 = withStyles(ProfileInfo3Component, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  detailsContainer: {},
  nameLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.headline,
  },
  locationLabel: {
    marginTop: 2,
    color: 'white',
  },
  profileAvatar: {
    width: 124,
    height: 124,
  },
  locationIcon: {
    tintColor: 'white',
  },
}));
