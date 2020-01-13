import React from 'react';
import { TabBar, TabBarProps, ThemeProvider } from '@ui-kitten/components';
import { Theming } from '../services/theme.service';

export const BrandTabBar = (props: TabBarProps): React.ReactElement => {

  const brandTheme = Theming.useTheme('brand');

  return (
    <ThemeProvider theme={brandTheme}>
      <TabBar {...props}/>
    </ThemeProvider>
  );
};
