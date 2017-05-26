import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {AppRoutes} from './config/routesBuilder';
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
        contentComponent: (props) => <Screens.SideMenu {...props}/>
      })
  }
}, {
  headerMode: 'none',
});

bootstrap();

export default () => <KittenApp />;