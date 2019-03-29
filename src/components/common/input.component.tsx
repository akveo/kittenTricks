import React from 'react';
import {
  Input as InputComponent,
  InputProps,
} from '@kitten/ui';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';

class StyledInput extends React.Component<InputProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <InputComponent
        {...restProps}
        style={[themedStyle, style]}
      />
    );
  }
}

export const Input = withStyles(StyledInput, (theme: ThemeType) => ({
  fontFamily: 'opensans-regular',
  color: 'white',
}));

