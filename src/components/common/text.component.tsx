import React from 'react';
import {
  Text as TextComponent,
  TextProps,
} from '@kitten/ui';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';

class StyledText extends React.Component<TextProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <TextComponent
        {...restProps}
        style={[themedStyle, style]}
      />
    );
  }
}

export const Text = withStyles(StyledText, (theme: ThemeType) => ({
  fontFamily: 'opensans-regular',
  color: 'white',
}));
