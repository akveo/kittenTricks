import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import {AppRoutes} from './config/routesBuilder';
import * as Screens from './screens';
import {bootstrap} from './config/bootstrap';

let SideMenu = withRkTheme(Screens.SideMenu);

const KittenApp = StackNavigator({
  First: {
    screen: Screens.SplashScreen
  },
  Home: {
    screen: DrawerNavigator({
        ...AppRoutes,
      },
      {
        contentComponent: (props) => <SideMenu {...props}/>
      })
  }
}, {
  headerMode: 'none',
});

bootstrap();

export default () => <KittenApp />;