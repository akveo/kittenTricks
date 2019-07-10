import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

interface ComponentProps {
  iconStyle?: StyleProp<ImageStyle>;
}

export type SocialButtonProps = ThemedComponentProps & ButtonProps & ComponentProps;

class SocialAuthButtonComponent extends React.Component<SocialButtonProps> {

  private renderIcon = (style: ImageStyle): React.ReactElement<ImageProps> => {
    const { icon, iconStyle } = this.props;

    return icon({ ...style, ...StyleSheet.flatten(iconStyle) });
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <Button
        appearance='ghost'
        size='giant'
        {...restProps}
        icon={this.renderIcon}
      />
    );
  }
}

export const SocialButton = withStyles(SocialAuthButtonComponent, (theme: ThemeType) => ({
  icon: {
    width: 24,
    height: 24,
  },
}));
