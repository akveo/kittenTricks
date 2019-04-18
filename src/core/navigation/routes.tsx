import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer as ReactNavigationContainer,
  HeaderProps,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import {
  MenuContainer,
  LayoutsContainer,
  ComponentsContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  AuthContainer,
  SignIn1Container,
  SignIn2Container,
  SignIn3Container,
  SignIn4Container,
  SignUp1Container,
  SignUp2Container,
  SignUp3Container,
  SignUp4Container,
  ForgotPasswordContainer,
  SocialContainer,
  Profile1Container,
  Profile2Container,
  Profile3Container,
  Profile4Container,
  Profile5Container,
  ProfileSettings1Container,
  ProfileSettings2Container,
  ProfileSettings3Container,
  Feed1Container,
  Feed2Container,
  SettingsContainer,
  ArticlesContainer,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
  ArticleList4Container,
  Article1Container,
  Article2Container,
  Article3Container,
  MessagingContainer,
  CommentsList1Container,
  ConversationsListContainer,
  Chat1Container,
  Chat2Container,
  Chat3Container,
  DashboardsContainer,
  WalkthroughContainer,
  EcommerceContainer,
  NavigationContainer,
  Trainings1Container,
  Trainings2Container,
} from '@src/containers/layouts';
import {
  AppBar,
  AppBarProps,
} from './appBar.component';
import { BackArrowIcon } from '@src/assets/icons';

const HeadingNavigationOptions = ({ navigation }) => {

  const header = (props: HeaderProps): React.ReactElement<AppBarProps> => {
    return (
      <AppBar
        {...props}
        navigation={navigation}
        backIcon={BackArrowIcon}
      />
    );
  };

  return { ...navigation, header };
};

const NavigationNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Navigation']: NavigationContainer,
  },
  {
    headerMode: 'none',
  },
);

const EcommerceNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Ecommerce']: EcommerceContainer,
  },
  {
    headerMode: 'none',
  },
);

const WalkthroughNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Walkthrough']: WalkthroughContainer,
  },
  {
    headerMode: 'none',
  },
);

const DashboardsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Dashboards']: DashboardsContainer,
    ['Trainings 1']: Trainings1Container,
    ['Trainings 2']: Trainings2Container,
  },
  {
    headerMode: 'none',
  },
);

const MessagingNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Messaging']: MessagingContainer,
    ['Comments List']: CommentsList1Container,
    ['Conversations List']: ConversationsListContainer,
    ['Chat 1']: Chat1Container, // TODO: add custom header
    ['Chat 2']: Chat2Container, // TODO: add custom header
    ['Chat 3']: Chat3Container, // TODO: add custom header
  },
  {
    headerMode: 'none',
  },
);

const ArticlesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Articles']: ArticlesContainer,
    ['Article List 1']: ArticleList1Container,
    ['Article List 2']: ArticleList2Container,
    ['Article List 3']: ArticleList3Container,
    ['Article List 4']: ArticleList4Container,
    ['Article 1']: Article1Container,
    ['Article 2']: Article2Container,
    ['Article 3']: Article3Container,
  },
  {
    headerMode: 'none',
  },
);

const SocialNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Social']: SocialContainer,
    ['Profile 1']: Profile1Container,
    ['Profile 2']: Profile2Container,
    ['Profile 3']: Profile3Container,
    ['Profile 4']: Profile4Container,
    ['Profile 5']: Profile5Container,
    ['Profile Settings 1']: ProfileSettings1Container,
    ['Profile Settings 2']: ProfileSettings2Container,
    ['Profile Settings 3']: ProfileSettings3Container,
    ['Feed 1']: Feed1Container,
    ['Feed 2']: Feed2Container,
    ['Settings']: SettingsContainer,
  },
  {
    headerMode: 'none',
  },
);

const AuthNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Auth']: AuthContainer,
    ['Sign In 1']: SignIn1Container,
    ['Sign In 2']: SignIn2Container,
    ['Sign In 3']: SignIn3Container,
    ['Sign In 4']: SignIn4Container,
    ['Sign Up 1']: SignUp1Container,
    ['Sign Up 2']: SignUp2Container,
    ['Sign Up 3']: SignUp3Container,
    ['Sign Up 4']: SignUp4Container,
    ['Forgot Password']: ForgotPasswordContainer,
  },
  {
    headerMode: 'none',
  },
);

const ThemesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  },
  {
    headerMode: 'none',
  },
);

const ComponentsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
  },
  {
    headerMode: 'none',
  },
);

const LayoutsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Layouts']: LayoutsContainer,
    ['Auth']: AuthNavigator,
    ['Social']: SocialNavigator,
    ['Articles']: ArticlesNavigator,
    ['Messaging']: MessagingNavigator,
    ['Dashboards']: DashboardsNavigator,
    ['Walkthrough']: WalkthroughNavigator,
    ['Ecommerce']: EcommerceNavigator,
    ['Navigation']: NavigationNavigator,
  }, {
    headerMode: 'none',
  },
);

const HomeNavigator: ReactNavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ComponentsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: ReactNavigationContainer = createStackNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: HeadingNavigationOptions,
  },
});

export const Router: ReactNavigationContainer = createAppContainer(AppNavigator);
