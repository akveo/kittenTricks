import React from 'react';
import _ from 'lodash';
import { createStackNavigator } from 'react-navigation';
import { withRkTheme } from 'react-native-ui-kitten';
import { NavBar } from '../../components/index';
import transition from './transitions';
import {
  MainRoutes,
  MenuRoutes,
} from './routes';

const main = {};
const flatRoutes = {};
(MenuRoutes).map((route, index) => {
  const wrapToRoute = (route) => ({
    screen: withRkTheme(route.screen),
    title: route.title,
  });

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (const child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});

const ThemedNavigationBar = withRkTheme(NavBar);

const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  const stack_name = name;
  routes[stack_name] = {
    name: stack_name,
    screen: createStackNavigator(flatRoutes, {
      initialRouteName: name,
      headerMode: 'screen',
      cardStyle: { backgroundColor: 'transparent' },
      transitionConfig: transition,
      navigationOptions: ({ navigation, screenProps }) => ({
        gesturesEnabled: false,
        header: (headerProps) => <ThemedNavigationBar navigation={navigation} headerProps={headerProps} />,
      }),
    }),
  };
  return routes;
}, {});

export const AppRoutes = DrawerRoutes;
export const LoginRoutes = _.find(MainRoutes, { id: 'LoginMenu' }).children;
export const NavigationRoutes = _.find(MainRoutes, { id: 'NavigationMenu' }).children;
export const SocialRoutes = _.find(MainRoutes, { id: 'SocialMenu' }).children;
export const ArticleRoutes = _.find(MainRoutes, { id: 'ArticlesMenu' }).children;
export const MessagingRoutes = _.find(MainRoutes, { id: 'MessagingMenu' }).children;
export const DashboardRoutes = _.find(MainRoutes, { id: 'DashboardsMenu' }).children;
export const WalkthroughRoutes = _.find(MainRoutes, { id: 'WalkthroughMenu' }).children;
export const EcommerceRoutes = _.find(MainRoutes, { id: 'EcommerceMenu' }).children;
export const OtherRoutes = _.find(MainRoutes, { id: 'OtherMenu' }).children;
