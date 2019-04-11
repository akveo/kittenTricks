import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

interface ComponentProps {
  type: 'google' | 'facebook' | 'twitter';
  iconStyle?: StyleProp<ImageStyle>;
}

export type SocialButtonProps = ThemedComponentProps & ButtonProps & ComponentProps;

class SocialButtonComponent extends React.Component<SocialButtonProps> {

  private getIconSource = (): ImageSourcePropType => {
    const { type } = this.props;

    return { uri: `https://akveo.github.io/eva-icons/fill/png/128/${type}.png` };
  };

  private renderIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { iconStyle } = this.props;

    return (
      <Image
        style={[style, iconStyle]}
        source={this.getIconSource()}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <Button
        style={style}
        appearance='ghost'
        size='giant'
        activeOpacity={0.5}
        icon={this.renderIcon}
        {...restProps}
      />
    );
  }
}

export const SocialButton = withStyles(SocialButtonComponent, (theme: ThemeType) => ({
  button: {
    backgroundColor: theme['opacity-transparent'],
  },
  icon: {
    width: 24,
    height: 24,
  },
}));
