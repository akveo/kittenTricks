import React from 'react';
import { DefaultTheme, NavigationNativeContainer } from '@react-navigation/native';
import { HomeNavigator } from './home.navigator';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => (
  <NavigationNativeContainer theme={navigatorTheme}>
    <HomeNavigator/>
  </NavigationNativeContainer>
);
