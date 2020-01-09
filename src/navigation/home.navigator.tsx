import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LayoutsNavigator } from './layouts.navigator';
import { ComponentsNavigator } from './components.navigator';
import { ThemesNavigator } from './themes.navigator';
import { HomeScreen } from '../scenes/home/home.component';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeDrawer } from '../scenes/home/home-drawer.component';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Can we access it from `HomeNavigator`?
const ROOT_ROUTES: string[] = ['Home', 'Layouts', 'Components', 'Themes'];

const isOneOfRootRoutes = (route): boolean => {
  const isRootRoute: string = ROOT_ROUTES.find((rootRoute: string) => {
    return route.name === rootRoute;
  });
  return isRootRoute !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    tabBar={(props) => <HomeScreen {...props} />}>
    <BottomTab.Screen name='Layouts' component={LayoutsNavigator}/>
    <BottomTab.Screen name='Components' component={ComponentsNavigator}/>
    <BottomTab.Screen name='Themes' component={ThemesNavigator}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator drawerContent={(props) => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
  </Drawer.Navigator>
);
