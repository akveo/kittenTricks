import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type ChildrenProp = React.ReactText;

interface ComponentProps {
  icon?: IconProp;
  children?: ChildrenProp;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export type ProfileLocationProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileLocationComponent extends React.Component<ProfileLocationProps> {

  private renderTextElement = (children: ChildrenProp, style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
    return (
      <Text style={style}>
        {children}
      </Text>
    );
  };

  private renderIconElement = (icon: IconProp, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    const flatStyle: ImageStyle = StyleSheet.flatten(style);

    const iconElement: React.ReactElement<ImageProps> = icon(flatStyle);

    return React.cloneElement(iconElement, {
      style: [flatStyle, iconElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, iconStyle, textStyle, icon, children, ...restProps } = this.props;
    const { container, ...componentStyle } = themedStyle;

    const iconElement = icon ? this.renderIconElement(icon, [componentStyle.icon, iconStyle]) : null;
    const textElement = children ? this.renderTextElement(children, [componentStyle.text, textStyle]) : null;

    return (
      <View
        style={[container, style]}
        {...restProps}>
        {iconElement}
        {textElement}
      </View>
    );
  }
}

export const ProfileLocation = withStyles(ProfileLocationComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: theme['color-basic-600'],
  },
  text: {
    marginHorizontal: 8,
    fontSize: 14,
    color: theme['color-basic-600'],
  },
}));
