import React from 'react';
import {StackNavigator} from 'react-navigation'
import _ from 'lodash';
import * as Screens from '../screens';

export const MainRoutes = [
  {
    id: 'NavigationMenu',
    title: 'Navigation title',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'GridV1- title',
        screen: Screens.GridV1,
        children: []
      },
      {
        id: 'GridV2',
        title: 'GridV2- title',
        screen: Screens.GridV2,
        children: []
      },
    ]
  },

  {
    id: 'LoginMenu',
    title: 'Login title',
    screen: Screens.LoginMenu,
    children: []
  },
  {
    id: 'SocialMenu',
    title: 'Social',
    screen: Screens.SocialMenu,
    children: []
  },
  {
    id: 'ArticlesMenu',
    title: 'Articles',
    screen: Screens.ArticleMenu,
    children: []
  },
  {
    id: 'MessagingMenu',
    title: 'Messaging',
    screen: Screens.MessagingMenu,
    children: []
  },
  {
    id: 'DashboardsMenu',
    title: 'Dashboards',
    screen: Screens.DashboardMenu,
    children: []
  },
  {
    id: 'WalkthroughMenu',
    title: 'Walkthrough',
    screen: Screens.WalkthroughMenu,
    children: []
  },
  {
    id: 'EcommerceMenu',
    title: 'Ecommerce',
    screen: Screens.EcommerceMenu,
    children: []
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    screen: Screens.OtherMenu,
    children: []
  }
];

let main = {};
let flatRoutes = {};
(MainRoutes).map(function (route, index) {

  let wrapToRoute = (route) => {
    return {screen: route.screen, title: route.title}
  };

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (let child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});

const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  let stack_name = name;
  routes[stack_name] = {
    name: stack_name,
    title: flatRoutes[name].title,
    screen: StackNavigator(flatRoutes, {initialRouteName: name,})
  };
  return routes;
}, {});

export const AppRoutes = DrawerRoutes;
export const LoginRoutes = _.find(MainRoutes, {id: 'LoginMenu'}).children;
export const NavigationRoutes = _.find(MainRoutes, {id: 'NavigationMenu'}).children;
export const SocialRoutes = _.find(MainRoutes, {id: 'SocialMenu'}).children;
export const ArticleRoutes = _.find(MainRoutes, {id: 'ArticlesMenu'}).children;
export const MessagingRoutes = _.find(MainRoutes, {id: 'MessagingMenu'}).children;
export const DashboardRoutes = _.find(MainRoutes, {id: 'DashboardsMenu'}).children;
export const WalkthroughRoutes = _.find(MainRoutes, {id: 'WalkthroughMenu'}).children;
export const EcommerceRoutes = _.find(MainRoutes, {id: 'EcommerceMenu'}).children;
export const OtherRoutes = _.find(MainRoutes, {id: 'OtherMenu'}).children;


export const SideMenuComponent = (props) => (
  <Screens.SideMenu {...props}/>
);
