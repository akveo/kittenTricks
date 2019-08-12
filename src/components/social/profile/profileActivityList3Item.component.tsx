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

export type ProfileActivityList3ItemProps = ThemedComponentProps & ImageProps;

class ProfileActivityList3ItemComponent extends React.Component<ProfileActivityList3ItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <Image
        style={[themedStyle.container, style]}
        {...restProps}
      />
    );
  }
}

export const ProfileActivityList3Item = withStyles(ProfileActivityList3ItemComponent, (theme: ThemeType) => ({
  container: {},
}));
