import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

type Props = ThemedComponentProps;

class ComponentsComponent extends React.Component<Props> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <View style={themedStyle.container}/>
    );
  }
}

export const Components = withStyles(ComponentsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
