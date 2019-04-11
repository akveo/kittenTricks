import React from 'react';
import {
  Button as ButtonComponent,
  ButtonProps as ButtonComponentProps,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

export type ButtonProps = ThemedComponentProps & ButtonComponentProps;

class StyledButton extends React.Component<ButtonProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <ButtonComponent
        {...restProps}
        style={[themedStyle, style]}
      />
    );
  }
}

export const Button = withStyles(StyledButton, (theme: ThemeType) => ({
  fontFamily: 'opensans-regular',
  color: theme['color-white'],
}));
