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
} from '@kitten/ui';
import { textStyle } from '@src/components/common/style';

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
        appearance='ghost'
        {...restProps}
        style={[themedStyle.button, style]}
        icon={this.renderIconElement}
      />
    );
  }
}

export const ReactionButton = withStyles(ReactionButtonComponent, (theme: ThemeType) => ({
  button: {
    paddingHorizontal: 0,
    fontSize: 15,
    color: theme['font-primary-color'],
    ...textStyle.paragraph,
  },
  icon: {
    width: 24,
    height: 24,
  },
}));
