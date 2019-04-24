import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer as ReactNavigationContainer,
  HeaderProps,
  createBottomTabNavigator,
} from 'react-navigation';
import {
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
  SignIn5Container,
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
  Profile6Container,
  Profile7Container,
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
  ConversationsListContainer,
  Chat1Container,
  Chat2Container,
  Chat3Container,
  DashboardsContainer,
  BookDetailsContainer,
  MovieDetailsContainer,
  WalkthroughContainer,
  EcommerceContainer,
  ShoppingCartContainer,
  ProductsListContainer,
  ProductDetailsContainer,
  AddNewCardContainer,
  PaymentContainer,
  RentApartmentContainer,
  NavigationContainer,
  Trainings1Container,
  Trainings2Container,
} from '@src/containers/layouts';
import {
  AvatarContainer,
  ButtonContainer,
  CheckBoxContainer,
  InputContainer,
  RadioContainer,
  ToggleContainer,
  TabViewShowcaseContainer,
  PopoverShowcaseContainer,
  TooltipShowcaseContainer,
  OverflowMenuShowcaseContainer,
  ListShowcaseContainer,
} from '@src/containers/components';
import {
  MenuNavigatorParams,
  FullscreenParams,
  TopNavigationElement,
  RootNavigatorParams,
} from './navigationParams';
import { BottomNavigationBar } from './components/bottomNavigationBar.component';
import { getCurrentRouteState } from './routeUtil';

const HeadingNavigationOptions = ({ navigation }) => {

  const header = (headerProps: HeaderProps): TopNavigationElement | null => {
    const { params } = getCurrentRouteState(navigation);

    return params && params.topNavigation && params.topNavigation(headerProps);
  };

  return { ...navigation, header };
};

const NavigationNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Navigation']: NavigationContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
  },
);

const EcommerceNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Ecommerce']: EcommerceContainer,
    ['Add New Card']: AddNewCardContainer,
    ['Payment']: PaymentContainer,
    ['Products List']: ProductsListContainer,
    ['Product Details']: ProductDetailsContainer,
    ['Shopping Cart']: ShoppingCartContainer,
    ['Rent Apartment']: RentApartmentContainer,
    ['Movie Details']: MovieDetailsContainer,
    ['Book Details']: BookDetailsContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
  },
);

const WalkthroughNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Walkthrough']: WalkthroughContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
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
    initialRouteParams: MenuNavigatorParams,
  },
);

const MessagingNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Messaging']: MessagingContainer,
    ['Conversations List']: ConversationsListContainer,
    ['Chat 1']: Chat1Container, // TODO: add custom header
    ['Chat 2']: Chat2Container, // TODO: add custom header
    ['Chat 3']: Chat3Container, // TODO: add custom header
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
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
    initialRouteParams: MenuNavigatorParams,
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
    ['Profile 6']: Profile6Container,
    ['Profile 7']: Profile7Container,
    ['Profile Settings 1']: ProfileSettings1Container,
    ['Profile Settings 2']: ProfileSettings2Container,
    ['Profile Settings 3']: ProfileSettings3Container,
    ['Feed 1']: Feed1Container,
    ['Feed 2']: Feed2Container,
    ['Settings']: SettingsContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
  },
);

const AuthNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Auth']: AuthContainer,
    ['Sign In 1']: {
      screen: SignIn1Container,
      params: FullscreenParams,
    },
    ['Sign In 2']: {
      screen: SignIn2Container,
      params: FullscreenParams,
    },
    ['Sign In 3']: {
      screen: SignIn3Container,
      params: FullscreenParams,
    },
    ['Sign In 4']: {
      screen: SignIn4Container,
      params: FullscreenParams,
    },
    ['Sign In 5']: {
      screen: SignIn5Container,
      params: FullscreenParams,
    },
    ['Sign Up 1']: {
      screen: SignUp1Container,
      params: FullscreenParams,
    },
    ['Sign Up 2']: {
      screen: SignUp2Container,
      params: FullscreenParams,
    },
    ['Sign Up 3']: {
      screen: SignUp3Container,
      params: FullscreenParams,
    },
    ['Sign Up 4']: {
      screen: SignUp4Container,
      params: FullscreenParams,
    },
    ['Forgot Password']: {
      screen: ForgotPasswordContainer,
      params: FullscreenParams,
    },
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
  },
);

const ThemesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: {
      ...RootNavigatorParams,
      ...MenuNavigatorParams,
    },
  },
);

const ComponentsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
    ['Button']: ButtonContainer,
    ['CheckBox']: CheckBoxContainer,
    ['Radio']: RadioContainer,
    ['Input']: InputContainer,
    ['Avatar']: AvatarContainer,
    ['Toggle']: ToggleContainer,
    ['Tab View']: TabViewShowcaseContainer,
    ['Popover']: PopoverShowcaseContainer,
    ['Tooltip']: TooltipShowcaseContainer,
    ['Overflow Menu']: OverflowMenuShowcaseContainer,
    ['List']: ListShowcaseContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: {
      ...RootNavigatorParams,
      ...MenuNavigatorParams,
    },
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
    initialRouteParams: {
      ...RootNavigatorParams,
      ...MenuNavigatorParams,
    },
  },
);

const MenuNavigator: ReactNavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ComponentsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: BottomNavigationBar,
});

const AppNavigator: ReactNavigationContainer = createStackNavigator({
  ['Home']: {
    screen: MenuNavigator,
    navigationOptions: HeadingNavigationOptions,
  },
});

export const Router: ReactNavigationContainer = createAppContainer(AppNavigator);
