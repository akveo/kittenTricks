import React from 'react';
import { View, Text } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';

interface ComponentProps {}

export type Hard1ComponentProps = ThemedComponentProps & ComponentProps;

class Hard1Component extends React.Component<Hard1ComponentProps> {

  public render(): React.ReactNode {
    return (
      <View><Text>Hard1Component</Text></View>
    );
  }
}

export const Hard1 = withStyles(Hard1Component, (theme: ThemeType) => ({
}));
