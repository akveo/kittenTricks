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

interface ComponentProps {
  photo: ImageSourcePropType;
  name: string;
  location: string;
  children?: React.ReactNode;
}

export type ProfileInfo1Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileInfo1Component extends React.Component<ProfileInfo1Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, location, children, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Avatar
          size='giant'
          source={photo}
        />
        <View style={themedStyle.detailsContainer}>
          <Text
            style={themedStyle.nameLabel}
            category='h5'>
            {name}
          </Text>
          <Text
            style={themedStyle.locationLabel}
            appearance='hint'
            category='s2'>
            {location}
          </Text>
          {children}
        </View>
      </View>
    );
  }
}

export const ProfileInfo1 = withStyles(ProfileInfo1Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 24,
  },
  nameLabel: textStyle.headline,
  locationLabel: {
    ...textStyle.subtitle,
  },
}));
