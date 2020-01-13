import React from 'react';
import { FlexStyle } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Layout, LayoutElement, LayoutProps } from '@ui-kitten/components';

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

export interface SafeAreaLayoutProps extends LayoutProps {
  insets?: Inset | Inset[];
}

export const SafeAreaLayout = (props: SafeAreaLayoutProps): LayoutElement => {
  const { insets, style, theme, ...layoutProps } = props;

  const safeAreaInsets: EdgeInsets = useSafeArea();
  const insetStyles: FlexStyle[] = React.Children.map(insets, inset => INSETS[inset].toStyle(safeAreaInsets));

  return (
    <Layout
      {...layoutProps}
      style={[insetStyles, style]}
    />
  );
};

