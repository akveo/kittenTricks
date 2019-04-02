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
import { Avatar } from '@kitten/ui';
import { Text } from '@src/components/common';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: React.ReactText;
  location: React.ReactText;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileInfoComponent extends React.Component<Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, location, children, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Avatar
          style={themedStyle.photo}
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

export const ProfileInfo = withStyles(ProfileInfoComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 24,
  },
  photo: {
    width: 56,
    height: 56,
  },
  nameLabel: {
    fontFamily: 'anton-regular',
    fontSize: 24,
    color: '#0D1C2E',
  },
  locationLabel: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'opensans-semibold',
    color: '#8992A3',
  },
}));
