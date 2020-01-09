import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { HomeNavigator } from './home.navigator';

export const AppNavigator = (): React.ReactElement => (
  <NavigationNativeContainer>
    <HomeNavigator/>
  </NavigationNativeContainer>
);
