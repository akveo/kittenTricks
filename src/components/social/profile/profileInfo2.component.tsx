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
import { PinIcon } from '@src/assets/icons';
import { ProfileLocation } from './profileLocation.component';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: React.ReactText;
  location: React.ReactText;
}

export type ProfileInfo2Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileInfo2Component extends React.Component<ProfileInfo2Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, location, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.detailsContainer}>
          <Text style={themedStyle.nameLabel}>{name}</Text>
          <ProfileLocation
            style={themedStyle.locationLabel}
            icon={PinIcon}>
            {location}
          </ProfileLocation>
        </View>
        <Avatar
          style={themedStyle.profileAvatar}
          source={photo}
        />
      </View>
    );
  }
}

export const ProfileInfo2 = withStyles(ProfileInfo2Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {},
  nameLabel: {
    fontFamily: 'opensans-extrabold',
    fontSize: 20,
    lineHeight: 28,
  },
  locationLabel: {
    marginTop: 8,
  },
  profileAvatar: {
    width: 64,
    height: 64,
  },
}));
