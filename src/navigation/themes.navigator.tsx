import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ThemesScreen } from '../scenes/themes/themes.component';

const Stack = createStackNavigator();

export const ThemesNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Themes' component={ThemesScreen} />
  </Stack.Navigator>
);
