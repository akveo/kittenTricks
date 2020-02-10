import React from 'react';
import { FlexStyle, View, ViewProps } from 'react-native';
import { EdgeInsets, SafeAreaConsumer } from 'react-native-safe-area-context';
import { styled, StyledComponentProps } from '@ui-kitten/components';

interface InsetProvider {
  toStyle: (insets: EdgeInsets, styles) => FlexStyle;
}

const INSETS: Record<string, InsetProvider> = {
  top: {
    toStyle: (insets: EdgeInsets, styles): FlexStyle => ({
      ...styles,
      paddingTop: insets.top,
    }),
  },
  bottom: {
    toStyle: (insets: EdgeInsets, styles): FlexStyle => ({
      ...styles,
      paddingBottom: insets.bottom,
    }),
  },
};

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends ViewProps, StyledComponentProps {
  insets?: Inset;
  children?: React.ReactNode;
}

export class SafeAreaLayoutComponent extends React.Component<SafeAreaLayoutProps> {

  static styledComponentName: string = 'SafeAreaLayout';

  public render(): React.ReactElement<ViewProps> {
    return (
      <SafeAreaConsumer>
        {this.renderComponent}
      </SafeAreaConsumer>
    );
  }

  private createInsets = (insets: Inset | Inset[],
                          safeAreaInsets: EdgeInsets,
                          style): FlexStyle[] => {
    return React.Children.map(insets, inset => INSETS[inset].toStyle(safeAreaInsets, style));
  };

  private renderComponent = (safeAreaInsets: EdgeInsets): React.ReactElement<ViewProps> => {
    const { style, insets, themedStyle, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={[this.createInsets(insets, safeAreaInsets, themedStyle), style]}
      />
    );
  };
}

export const SafeAreaLayout = styled(SafeAreaLayoutComponent);

