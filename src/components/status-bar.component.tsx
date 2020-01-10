import React from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { Theming } from '../services/theme.service';

export const StatusBar = (props: StatusBarProps): React.ReactElement => {

  const theme = useTheme();
  const themeContext = React.useContext(Theming.Context);

  return (
    <RNStatusBar
      {...props}
      barStyle={themeContext.isDarkMode() ? 'light-content' : 'dark-content'}
      backgroundColor={theme['background-basic-color-2']}
    />
  );
};
