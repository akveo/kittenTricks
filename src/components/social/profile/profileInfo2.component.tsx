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
import { PinIconFill } from '@src/assets/icons';
import { ProfileLocation } from './profileLocation.component';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: string;
  location: string;
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
          <Text
            style={themedStyle.nameLabel}
            category='h6'>
            {name}
          </Text>
          <ProfileLocation
            style={themedStyle.locationLabel}
            icon={PinIconFill}>
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
  nameLabel: textStyle.headline,
  locationLabel: {
    marginTop: 8,
  },
  profileAvatar: {
    width: 64,
    height: 64,
  },
}));
