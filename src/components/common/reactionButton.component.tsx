import React from 'react';
import {
  ImageProps,
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
} from './button.component';

interface ComponentProps {
  iconStyle?: StyleProp<ImageStyle>;
}

export type ReactionButtonProps = ThemedComponentProps & ButtonProps & ComponentProps;

class ReactionButtonComponent extends React.Component<ReactionButtonProps> {

  private renderIconElement = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle, iconStyle } = this.props;

    const iconElement: React.ReactElement<ImageProps> = this.props.icon(style);

    return React.cloneElement(iconElement, {
      style: [iconElement.props.style, themedStyle.icon, iconStyle],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, iconStyle, ...restProps } = this.props;

    return (
      <Button
        activeOpacity={0.5}
        {...restProps}
        style={[themedStyle.button, style]}
        icon={this.renderIconElement}
      />
    );
  }
}

export const ReactionButton = withStyles(ReactionButtonComponent, (theme: ThemeType) => ({
  button: {
    padding: 0,
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#0D1C2E',
  },
  icon: {
    width: 24,
    height: 24,
  },
}));
