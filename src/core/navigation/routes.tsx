import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer,
  HeaderProps,
} from 'react-navigation';
import {
  AppBar,
  AppBarProps,
} from './appBar.component';
import {
  HomeContainer,
  ArticlesContainer,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
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
  SignInContainer,
  SignUpContainer,
} from '../../containers';

const HeadingNavigationOptions = ({ navigation }) => {

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
    initialRouteName: 'Edit Profile',
    headerMode: 'none',
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

const AuthNavigator: NavigationContainer = createStackNavigator(
  {
    ['Auth']: AuthContainer,
    ['Sign In']: SignInContainer,
    ['Sign Up']: SignUpContainer,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  },
);

const ArticlesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Articles']: ArticlesContainer,
    ['Article List 1']: ArticleList1Container,
    ['Article List 2']: ArticleList2Container,
    ['Article List 3']: ArticleList3Container,
  },
  {
    initialRouteName: 'Articles',
    headerMode: 'none',
    navigationOptions: HeadingNavigationOptions,
  },
);

const HomeNavigator: NavigationContainer = createStackNavigator(
  {
    ['Home']: HomeContainer,
    ['Articles']: ArticlesNavigator,
    ['Auth']: AuthNavigator,
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
