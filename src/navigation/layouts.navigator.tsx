import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';
import { ArticlesNavigator } from './articles.navigator';
import { AuthNavigator } from './auth.navigator';
import { DashboardsNavigator } from './dashboards.navigator';
import { EcommerceNavigator } from './ecommerce.navigator';
import { MessagingNavigator } from './messaging.navigator';
import { SocialNavigator } from './social.navigator';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='LayoutsSection' component={LayoutsScreen} />
    <Stack.Screen name='AuthSection' component={AuthNavigator} />
    <Stack.Screen name='SocialSection' component={SocialNavigator} />
    <Stack.Screen name='ArticlesSection' component={ArticlesNavigator} />
    <Stack.Screen name='MessagingSection' component={MessagingNavigator} />
    <Stack.Screen name='DashboardsSection' component={DashboardsNavigator} />
    <Stack.Screen name='EcommerceSection' component={EcommerceNavigator} />
  </Stack.Navigator>
);
