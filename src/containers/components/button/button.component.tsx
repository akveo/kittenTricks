import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ComponentShowcase } from '../common/type';

interface ComponentProps {
  showcase: ComponentShowcase;
}

export type ButtonComponentProps = ThemedComponentProps & ComponentProps;

class ButtonComponent extends React.Component<ButtonComponentProps> {

  public render(): React.ReactNode {
    const { themedStyle, showcase } = this.props;

    return (
      <Showcase showcase={showcase}/>
    );
  }
}

export const Button = withStyles(ButtonComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
