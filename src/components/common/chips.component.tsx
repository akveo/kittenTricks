import React from 'react';
import {
  View,
  TextProps,
  ImageProps,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  icon?: (style: StyleType) => React.ReactElement<ImageProps>;
  children: React.ReactElement<TextProps>;
}

export type ChipsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ChipsComponent extends React.Component<ChipsProps> {

  private renderIcon = (): React.ReactElement<ImageProps> | null => {
    const { icon, themedStyle } = this.props;

    return icon ? icon(themedStyle.icon) : null;
  };

  public render(): React.ReactNode {
    const { themedStyle, children, style } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        {this.renderIcon()}
        {children}
      </View>
    );
  }
}

export const Chips = withStyles(ChipsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: theme['color-primary-default'],
    borderRadius: 100,
  },
  icon: {
    width: 13,
    height: 13,
    tintColor: 'white',
  },
}));
