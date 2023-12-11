import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { LogBox } from 'react-native';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import { HomeDrawer } from '../scenes/home/home-drawer.component';
import { LibrariesScreen } from '../scenes/libraries/libraries.component';
import { ComponentsNavigator } from './components.navigator';
import { LayoutsNavigator } from './layouts.navigator';
import { ThemesNavigator } from './themes.navigator';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'ComponentsTab' : 'LayoutsTab';

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={initialTabRoute}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='LayoutsTab' component={LayoutsNavigator} />
    <BottomTab.Screen name='ComponentsTab' component={ComponentsNavigator} />
    <BottomTab.Screen name='ThemesTab' component={ThemesNavigator} />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false, headerShown: false }}
    drawerContent={props => <HomeDrawer {...props} />}>
    <Drawer.Screen name='Home' component={HomeTabsNavigator} />
    <Drawer.Screen name='Libraries' component={LibrariesScreen} />
  </Drawer.Navigator>
);

LogBox.ignoreLogs(['Accessing the \'state\'']);
