import React from 'react';
import { View, Text } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';

interface ComponentProps {}

export type Medium1ComponentProps = ThemedComponentProps & ComponentProps;

class Medium1Component extends React.Component<Medium1ComponentProps> {

  public render(): React.ReactNode {
    return (
      <View><Text>Medium1Component</Text></View>
    );
  }
}

export const Medium1 = withStyles(Medium1Component, (theme: ThemeType) => ({
}));
