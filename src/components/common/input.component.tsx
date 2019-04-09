import React from 'react';
import {
  Input as InputComponent,
  InputProps as InputComponentProps,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

export type InputProps = ThemedComponentProps & InputComponentProps;

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
  color: theme['color-white'],
}));

