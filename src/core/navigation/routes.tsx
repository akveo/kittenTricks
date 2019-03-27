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
  SettingsContainer,
  EditProfileContainer,
  EditProfile1Container,
  EditProfile2Container,
  EditProfile3Container,
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

const EditProfileNavigator: NavigationContainer = createStackNavigator(
  {
    ['Edit Profile']: EditProfileContainer,
    ['Edit Profile 1']: EditProfile1Container,
    ['Edit Profile 2']: EditProfile2Container,
    ['Edit Profile 3']: EditProfile3Container,
  }, {
    headerMode: 'none',
    initialRouteName: 'Edit Profile',
    navigationOptions: HeadingNavigationOptions,
  },
);

const SettingsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Settings']: SettingsContainer,
    ['Edit Profile']: EditProfileNavigator,
  }, {
    initialRouteName: 'Settings',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const SocialNavigator: NavigationContainer = createStackNavigator(
  {
    ['Social']: SocialContainer,
    ['Followers']: FollowersContainer,
  },
  {
    initialRouteName: 'Social',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const HomeNavigator: NavigationContainer = createStackNavigator(
  {
    ['Home']: HomeContainer,
    ['Articles']: ArticlesContainer,
    ['Auth']: AuthContainer,
    ['Dashboards']: DashboardsContainer,
    ['Messaging']: MessagingContainer,
    ['Other']: OtherContainer,
    ['Social']: SocialNavigator,
    ['Settings']: SettingsNavigator,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    ['Home']: HomeNavigator,
  },
);


export const Router: NavigationContainer = createAppContainer(AppNavigator);
