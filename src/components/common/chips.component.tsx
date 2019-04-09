import React from 'react';
import {
  View,
  TextProps,
  ImageProps,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  children: React.ReactElement<TextProps | ImageProps> | React.ReactElement<TextProps | ImageProps>[];
}

export type ChipsProps = ThemedComponentProps & ViewProps & ComponentProps;

class ChipsComponent extends React.Component<ChipsProps> {

  public render(): React.ReactNode {
    const { themedStyle, children, style } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
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
    backgroundColor: '#3366FF',
    borderRadius: 100,
  },
}));
