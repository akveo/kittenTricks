import React from 'react';
import {
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';

interface ComponentProps {
  followers: React.ReactText;
  following: React.ReactText;
  posts: React.ReactText;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
}

export type ProfileSocialsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileSocialsComponent extends React.Component<ProfileSocialsProps> {

  private onFollowersButtonPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingButtonPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsButtonPress = () => {
    this.props.onPostsPress();
  };

  public render(): React.ReactNode {
    const { style, themedStyle, followers, following, posts, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowersButtonPress}>
          <Text style={themedStyle.valueLabel}>{followers}</Text>
          <Text style={themedStyle.hintLabel}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowingButtonPress}>
          <Text style={themedStyle.valueLabel}>{following}</Text>
          <Text style={themedStyle.hintLabel}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onPostsButtonPress}>
          <Text style={themedStyle.valueLabel}>{posts}</Text>
          <Text style={themedStyle.hintLabel}>Posts</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const ProfileSocials = withStyles(ProfileSocialsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parameterContainer: {
    alignItems: 'center',
  },
  valueLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: '#0D1C2E',
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 13,
    color: '#8992A3',
  },
}));
