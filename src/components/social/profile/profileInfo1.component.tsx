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

interface ComponentProps {
  photo: ImageSourcePropType;
  name: React.ReactText;
  location: React.ReactText;
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
          <Text style={themedStyle.nameLabel}>{name}</Text>
          <Text style={themedStyle.locationLabel}>{location}</Text>
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
  nameLabel: {
    fontFamily: 'anton-regular',
    fontSize: 24,
    color: theme['font-primary-color'],
  },
  locationLabel: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));
