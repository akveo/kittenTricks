import React from 'react';
import {
  Button as ButtonComponent,
  ButtonProps,
} from '@kitten/ui';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';

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
  color: 'white',
}));
