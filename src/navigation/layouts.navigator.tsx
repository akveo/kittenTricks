import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { SocialNavigator } from './social.navigator';
import { ArticlesNavigator } from './articles.navigator';
import { MessagingNavigator } from './messaging.navigator';
import { DashboardsNavigator } from './dashboards.navigator';
import { EcommerceNavigator } from './ecommerce.navigator';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsScreen}/>
    <Stack.Screen name='Auth' component={AuthNavigator}/>
    <Stack.Screen name='Social' component={SocialNavigator}/>
    <Stack.Screen name='Articles' component={ArticlesNavigator}/>
    <Stack.Screen name='Messaging' component={MessagingNavigator}/>
    <Stack.Screen name='Dashboards' component={DashboardsNavigator}/>
    <Stack.Screen name='Ecommerce' component={EcommerceNavigator}/>
  </Stack.Navigator>
);
