import React from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

export type ProfileActivityList2ItemProps = ThemedComponentProps & ImageProps;

class ProfileActivityList2ItemComponent extends React.Component<ProfileActivityList2ItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <Image
        style={[themedStyle.container, style]}
        resizeMode='center'
        {...restProps}
      />
    );
  }
}

export const ProfileActivityList2Item = withStyles(ProfileActivityList2ItemComponent, (theme: ThemeType) => ({
  container: {},
}));
