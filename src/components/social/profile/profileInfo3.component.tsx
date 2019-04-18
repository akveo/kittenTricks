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
import { PinIconFill } from '@src/assets/icons';
import { ProfileLocation } from './profileLocation.component';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: React.ReactText;
  location: React.ReactText;
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
        <Text style={themedStyle.nameLabel}>{name}</Text>
        <ProfileLocation
          style={themedStyle.locationLabel}
          iconStyle={themedStyle.locationIcon}
          textStyle={themedStyle.locationLabel}
          icon={PinIconFill}>
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
    fontFamily: 'opensans-extrabold',
    fontSize: 20,
    lineHeight: 28,
    color: theme['color-white'],
  },
  locationLabel: {
    marginTop: 2,
    color: theme['color-white'],
  },
  profileAvatar: {
    width: 124,
    height: 124,
  },
  locationIcon: {
    tintColor: theme['color-white'],
  },
}));
