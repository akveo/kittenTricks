import React from 'react';
import { Drawer, DrawerProps, ThemeProvider } from '@ui-kitten/components';
import { Theming } from '../services/theme.service';

export const BrandDrawer = (props: DrawerProps): React.ReactElement => {

  const brandTheme = Theming.useTheme('brand');

  return (
    <ThemeProvider theme={brandTheme}>
      <Drawer {...props} />
    </ThemeProvider>
  );
};
