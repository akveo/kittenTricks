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

export type CheckBoxProps = ThemedComponentProps & ComponentProps;

class CheckBoxComponent extends React.Component<CheckBoxProps> {

  public render(): React.ReactNode {
    const { themedStyle, showcase } = this.props;

    return (
      <Showcase showcase={showcase}/>
    );
  }
}

export const CheckBox = withStyles(CheckBoxComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
