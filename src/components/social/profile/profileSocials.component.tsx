import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  followers: number;
  following: number;
  posts: number;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  textStyle?: StyleProp<TextStyle>;
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
    const { style, themedStyle, textStyle: derivedTextStyle, followers, following, posts, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowersButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${followers}`}</Text>
          <Text
            style={[themedStyle.hintLabel, derivedTextStyle]}
            appearance='hint'
            category='s2'>
            Followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onFollowingButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${following}`}</Text>
          <Text
            style={[themedStyle.hintLabel, derivedTextStyle]}
            appearance='hint'
            category='s2'>
            Following
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.65}
          style={themedStyle.parameterContainer}
          onPress={this.onPostsButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${posts}`}</Text>
          <Text
            style={[themedStyle.hintLabel, derivedTextStyle]}
            appearance='hint'
            category='s2'>
            Posts
          </Text>
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
  valueLabel: textStyle.caption2,
  hintLabel: textStyle.subtitle,
}));
