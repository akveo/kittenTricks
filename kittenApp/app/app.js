import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {AppRoutes, SideMenuComponent} from './config/routes';
import * as Screens from './screens';
import {bootstrap} from './config/bootstrap';

const KittenApp = StackNavigator({
  First: {
    screen: Screens.SplashScreen
  },
  Home: {
    screen: DrawerNavigator({
        ...AppRoutes,
      },
      {
        contentComponent: SideMenuComponent
      })
  }
}, {
  headerMode: 'none',
});


bootstrap();

export default () => <KittenApp />;