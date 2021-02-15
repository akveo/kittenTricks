import React from 'react';
import { FlexStyle, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { EdgeInsets, SafeAreaConsumer } from 'react-native-safe-area-context';
import { styled, StyledComponentProps } from '@ui-kitten/components';

interface InsetProvider {
  toStyle: (insets: EdgeInsets) => FlexStyle;
}

const INSETS: Record<string, InsetProvider> = {
  top: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      paddingTop: insets.top,
    }),
  },
  bottom: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      paddingBottom: insets.bottom,
    }),
  },
};

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends ViewProps, StyledComponentProps {
  insets?: Inset;
  children?: React.ReactNode;
  backgroundColor?: string;
}

@styled('SafeAreaLayout')
export class SafeAreaLayout extends React.Component<SafeAreaLayoutProps> {

  static styledComponentName: string = 'SafeAreaLayout';

  private createInsets = (insets: Inset | Inset[],
                          safeAreaInsets: EdgeInsets,
                          style): FlexStyle[] => {
    return React.Children.map(insets, inset => INSETS[inset].toStyle(safeAreaInsets, style));
  };

  private renderComponent = (safeAreaInsets: EdgeInsets): React.ReactElement<ViewProps> => {
    const { style, insets, eva, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={[this.createInsets(insets, safeAreaInsets, eva.style), style]}
      />
    );
  };

  public render(): React.ReactElement<ViewProps> {
    return (
      <SafeAreaConsumer>
        {this.renderComponent}
      </SafeAreaConsumer>
    );
  }
}
