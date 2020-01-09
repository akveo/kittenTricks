import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthScreen } from '../scenes/auth/auth.component';
import { AuthGridScreen } from '../scenes/auth/auth-grid.component';
import { AuthListScreen } from '../scenes/auth/auth-list.component';
import SignIn1Screen from '../scenes/auth/sign-in-1';
import SignIn2Screen from '../scenes/auth/sign-in-2';
import SignIn3Screen from '../scenes/auth/sign-in-3';
import SignIn4Screen from '../scenes/auth/sign-in-4';
import SignIn5Screen from '../scenes/auth/sign-in-5';
import SignUp1Screen from '../scenes/auth/sign-up-1';
import SignUp2Screen from '../scenes/auth/sign-up-2';
import SignUp3Screen from '../scenes/auth/sign-up-3';
import SignUp4Screen from '../scenes/auth/sign-up-4';
import ForgotPasswordScreen from '../scenes/auth/forgot-password';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AuthMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <AuthScreen {...props}/>}>
    <TopTab.Screen name='AuthGrid' component={AuthGridScreen}/>
    <TopTab.Screen name='AuthList' component={AuthListScreen}/>
  </TopTab.Navigator>
);

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Auth' component={AuthMenuNavigator}/>
    <Stack.Screen name='SignIn1' component={SignIn1Screen}/>
    <Stack.Screen name='SignIn2' component={SignIn2Screen}/>
    <Stack.Screen name='SignIn3' component={SignIn3Screen}/>
    <Stack.Screen name='SignIn4' component={SignIn4Screen}/>
    <Stack.Screen name='SignIn5' component={SignIn5Screen}/>
    <Stack.Screen name='SignUp1' component={SignUp1Screen}/>
    <Stack.Screen name='SignUp2' component={SignUp2Screen}/>
    <Stack.Screen name='SignUp3' component={SignUp3Screen}/>
    <Stack.Screen name='SignUp4' component={SignUp4Screen}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
  </Stack.Navigator>
);
