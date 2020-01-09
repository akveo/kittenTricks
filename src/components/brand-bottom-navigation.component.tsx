import React from 'react';
import { BottomNavigation, BottomNavigationProps, ThemeProvider } from '@ui-kitten/components';
import { Theming } from '../services/theme.service';

export const BrandBottomNavigation = (props: BottomNavigationProps): React.ReactElement => {

  const brandTheme = Theming.useTheme('brand');

  return (
    <ThemeProvider theme={brandTheme}>
      <BottomNavigation {...props}/>
    </ThemeProvider>
  );
};
