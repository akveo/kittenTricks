import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import {AppRoutes} from './config/navigation/routesBuilder';
import * as Screens from './screens';
import {bootstrap} from './config/bootstrap';
import track from './config/analytics';
import {data} from './data'
import {AppLoading, Font} from 'expo';
import {View} from "react-native";

bootstrap();
data.populateData();

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

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
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: (props) => <SideMenu {...props}/>
      })
  }
}, {
  headerMode: 'none',
});

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this._loadAssets();
  }

  _loadAssets = async() => {
    await Font.loadAsync({
      'fontawesome': require('./assets/fonts/fontawesome.ttf'),
      'icomoon': require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({loaded: true});
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return (
      <View style={{flex: 1}}>
        <KittenApp
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);

            if (prevScreen !== currentScreen) {
              track(currentScreen);
            }
          }}
        />
      </View>
    );
  }
}

Expo.registerRootComponent(App);
