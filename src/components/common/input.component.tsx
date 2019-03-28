import React from 'react';
import {
  Input as KittenInput,
  InputProps,
} from '@kitten/ui';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';

class InputComponent extends React.Component<InputProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <KittenInput
        {...restProps}
        style={[themedStyle, style]}
      />
    );
  }
}

export const Input = withStyles(InputComponent, (theme: ThemeType) => ({
  fontFamily: 'opensans-regular',
  color: 'white',
}));

