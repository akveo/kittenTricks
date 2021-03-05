import React from 'react';
import {
  useSafeArea,
} from 'react-native-safe-area-context';
import {
  StyledComponentProps,
  LayoutProps,
  Layout,
  useTheme,
} from '@ui-kitten/components';

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends StyledComponentProps, LayoutProps {
  insets?: Inset;
  children?: React.ReactNode;
}

export const SafeAreaLayout: React.FC<SafeAreaLayoutProps> = ({
  insets,
  ...props
}) => {
  const theme = useTheme();
  const insetsConfig = useSafeArea();

  const backgroundColor: string = theme[`background-basic-color-${props.level}`];

  return (
    <Layout
      {...props}
      style={[
        props.style,
        backgroundColor && { backgroundColor },
        {
          paddingTop: insets === 'top' && insetsConfig.top,
          paddingBottom: insets === 'bottom' && insetsConfig.bottom,
        },
      ]}
    />
  );
};
