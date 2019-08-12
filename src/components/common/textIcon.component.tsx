import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from './style';

type IconProp = (style: StyleProp<ImageStyle>) => React.ReactElement<ImageProps>;

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageProps>;
  icon?: IconProp;
  children?: string;
}

export type TextIconProps = ThemedComponentProps & ViewProps & ComponentProps;

class TextIconComponent extends React.Component<TextIconProps> {

  private renderIconElement = (icon: IconProp, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = icon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, textStyle: derivedTextStyle, iconStyle, icon, children } = this.props;

    const iconElement = icon ?
      this.renderIconElement(icon, { ...themedStyle.icon, ...StyleSheet.flatten(iconStyle) }) : null;

    return (
      <View style={[themedStyle.container, style]}>
        {iconElement}
        <Text style={[themedStyle.text, derivedTextStyle]}>
          {children}
        </Text>
      </View>
    );
  }
}

export const TextIcon = withStyles(TextIconComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
    ...textStyle.paragraph,
  },
  icon: {
    width: 16,
    height: 16,
  },
}));
