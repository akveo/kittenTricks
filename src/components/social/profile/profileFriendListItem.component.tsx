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
import {
  Avatar,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface TouchableProps extends TouchableOpacityProps {
  onPress: (index: number) => void;
}

interface ComponentProps extends ListDerivedProps, TouchableProps {
  photo: ImageSourcePropType;
  name: string;
}

export type ProfileFriendListItemProps = ThemedComponentProps & ComponentProps & ComponentProps;

class ProfileFriendListItemComponent extends React.Component<ProfileFriendListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Avatar
          style={themedStyle.photo}
          size='large'
          source={photo}
        />
        <Text
          style={themedStyle.nameLabel}
          category='c2'>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export const ProfileFriendListItem = withStyles(ProfileFriendListItemComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    backgroundColor: theme['background-basic-color-1'],
  },
  nameLabel: {
    marginTop: 8,
    ...textStyle.caption2,
  },
}));
