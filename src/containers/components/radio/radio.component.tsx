import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ComponentShowcase } from '../common/type';
import { Showcase } from '@src/containers/components/common/showcase.component';

interface ComponentProps {
  showcase: ComponentShowcase;
}

export type RadioProps = ThemedComponentProps & ComponentProps;

class RadioComponent extends React.Component<RadioProps> {

  public render(): React.ReactNode {
    const { themedStyle, showcase } = this.props;

    return (
      <Showcase showcase={showcase}/>
    );
  }
}

export const Radio = withStyles(RadioComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
