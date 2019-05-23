import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

type Props = ThemedComponentProps;

class ThemesComponent extends React.Component<Props> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}/>
    );
  }
}

export const Themes = withStyles(ThemesComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-color-default-2'],
  },
}));
