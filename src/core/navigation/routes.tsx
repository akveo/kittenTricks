import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer,
  HeaderProps,
  NavigationScreenConfig,
  NavigationScreenOptions,
} from 'react-navigation';
import {
  AppBar,
  AppBarProps,
} from './appBar.component';
import {
  HomeContainer,
  ArticlesContainer,
  AuthContainer,
  DashboardsContainer,
  MessagingContainer,
  OtherContainer,
  SocialContainer,
  FollowersContainer,
} from '../../containers';

const HeadingNavigationOptions = ({ navigation }): NavigationScreenConfig<NavigationScreenOptions> => {

  const backIconUri: string = 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-back.png';

  const header = (props: HeaderProps): React.ReactElement<AppBarProps> => {
    return (
      <AppBar
        {...props}
        backIcon={{uri: backIconUri}}
        navigation={navigation}
      />
    );
  };

  return { ...navigation, header };
};

const SocialNavigator: NavigationContainer = createStackNavigator(
  {
    Social: SocialContainer,
    Followers: FollowersContainer,
  },
  {
    initialRouteName: 'Social',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const HomeNavigator: NavigationContainer = createStackNavigator(
  {
    Home: HomeContainer,
    Articles: ArticlesContainer,
    Auth: AuthContainer,
    Dashboards: DashboardsContainer,
    Messaging: MessagingContainer,
    Other: OtherContainer,
    Social: SocialNavigator,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'Home',
  },
);


export const Router: NavigationContainer = createAppContainer(AppNavigator);
