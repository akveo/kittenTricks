import React from 'react';
import {
  ImageProps,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { StarIconFill } from '@src/assets/icons';

type ComplexComponentShowcaseProps = ThemedComponentProps & ViewProps;

class ComplexComponentShowcaseComponent extends React.Component<ComplexComponentShowcaseProps> {
  public render(): React.ReactElement<ImageProps> {
    const { themedStyle } = this.props;

    return StarIconFill(themedStyle.icon);
  }
}

const ThemedComplexComponentShowcase = withStyles(ComplexComponentShowcaseComponent, (theme: ThemeType) => ({
  icon: {
    width: 32,
    height: 32,
    tintColor: theme['color-primary-default'],
  },
}));

export const ComplexComponentShowcase = () => {
  return (
    <ThemedComplexComponentShowcase />
  );
};
