import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  ComponentsContainer,
  LayoutsContainer,
  MenuContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  Article1Container,
  Article2Container,
  Article3Container,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
  ArticleList4Container,
  ArticlesContainer,
} from '@src/containers/layouts/articles';
import {
  AuthContainer,
  ForgotPasswordContainer,
  SignIn1Container,
  SignIn2Container,
  SignIn3Container,
  SignIn4Container,
  SignIn5Container,
  SignUp1Container,
  SignUp2Container,
  SignUp3Container,
  SignUp4Container,
} from '@src/containers/layouts/auth';
import {
  DashboardsContainer,
  Trainings1Container,
  Trainings2Container,
} from '@src/containers/layouts/dashboards';
import {
  AddNewCardContainer,
  BookDetailsContainer,
  EcommerceContainer,
  MovieDetailsContainer,
  PaymentContainer,
  ProductDetailsContainer,
  ProductsListContainer,
  RentApartmentContainer,
  ShoppingCartContainer,
} from '@src/containers/layouts/ecommerce';
import {
  Chat1Container,
  Chat2Container,
  Chat3Container,
  ConversationsListContainer,
  MessagingContainer,
} from '@src/containers/layouts/messaging';
import {
  Feed1Container,
  Feed2Container,
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
  SettingsContainer,
  SocialContainer,
} from '@src/containers/layouts/social';
import {
  AvatarContainer,
  BottomNavigationContainer,
  ButtonContainer,
  ButtonGroupContainer,
  CheckBoxContainer,
  InputContainer,
  ListContainer,
  OverflowMenuContainer,
  PopoverContainer,
  RadioContainer,
  TabViewContainer,
  TextContainer,
  ToggleContainer,
  TooltipContainer,
  TopNavigationContainer,
} from '@src/containers/components';
import {
  ArticlesNavigationOptions,
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
  MenuNavigationOptions,
  SocialNavigationOptions,
} from './options';

const EcommerceNavigationMap: NavigationRouteConfigMap = {
  ['Add New Card']: {
    screen: AddNewCardContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Payment']: {
    screen: PaymentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Products List']: {
    screen: ProductsListContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Product Details']: {
    screen: ProductDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Shopping Cart']: {
    screen: ShoppingCartContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Rent Apartment']: {
    screen: RentApartmentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Movie Details']: {
    screen: MovieDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Book Details']: {
    screen: BookDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
};

const DarhboardsNavigationMap: NavigationRouteConfigMap = {
  ['Trainings 1']: {
    screen: Trainings1Container,
    navigationOptions: DashboardNavigationOptions,
  },
  ['Trainings 2']: {
    screen: Trainings2Container,
    navigationOptions: DashboardNavigationOptions,
  },
};

const MessagingNavigationMap: NavigationRouteConfigMap = {
  ['Conversations List']: ConversationsListContainer,
  ['Chat 1']: Chat1Container,
  ['Chat 2']: Chat2Container,
  ['Chat 3']: Chat3Container,
  ['Test Profile']: {
    screen: Profile1Container,
    navigationOptions: SocialNavigationOptions,
  },
};

const ArticlesNavigationMap: NavigationRouteConfigMap = {
  ['Article List 1']: {
    screen: ArticleList1Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 2']: {
    screen: ArticleList2Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 3']: {
    screen: ArticleList3Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article List 4']: {
    screen: ArticleList4Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 1']: {
    screen: Article1Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 2']: {
    screen: Article2Container,
    navigationOptions: ArticlesNavigationOptions,
  },
  ['Article 3']: {
    screen: Article3Container,
    navigationOptions: ArticlesNavigationOptions,
  },
};

const SocialNavigationMap: NavigationRouteConfigMap = {
  ['Profile 1']: {
    screen: Profile1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 2']: {
    screen: Profile2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 3']: {
    screen: Profile3Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 4']: {
    screen: Profile4Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 5']: {
    screen: Profile5Container,
  },
  ['Profile 6']: {
    screen: Profile6Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile 7']: {
    screen: Profile7Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 1']: {
    screen: ProfileSettings1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 2']: {
    screen: ProfileSettings2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 3']: {
    screen: ProfileSettings3Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Feed 1']: {
    screen: Feed1Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Feed 2']: {
    screen: Feed2Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Settings']: {
    screen: SettingsContainer,
    navigationOptions: SocialNavigationOptions,
  },
};

const AuthNavigationMap: NavigationRouteConfigMap = {
  ['Sign In 1']: SignIn1Container,
  ['Sign In 2']: SignIn2Container,
  ['Sign In 3']: SignIn3Container,
  ['Sign In 4']: SignIn4Container,
  ['Sign In 5']: SignIn5Container,
  ['Sign Up 1']: SignUp1Container,
  ['Sign Up 2']: SignUp2Container,
  ['Sign Up 3']: SignUp3Container,
  ['Sign Up 4']: SignUp4Container,
  ['Forgot Password']: ForgotPasswordContainer,
};

const ThemesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const ComponentsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
    ['Button']: ButtonContainer,
    ['Button Group']: ButtonGroupContainer,
    ['CheckBox']: CheckBoxContainer,
    ['Toggle']: ToggleContainer,
    ['Radio']: RadioContainer,
    ['Input']: InputContainer,
    ['Text']: TextContainer,
    ['Avatar']: AvatarContainer,
    ['Tab View']: TabViewContainer,
    ['Popover']: PopoverContainer,
    ['Tooltip']: TooltipContainer,
    ['Overflow Menu']: OverflowMenuContainer,
    ['List']: ListContainer,
    ['Top Navigation']: TopNavigationContainer,
    ['Bottom Navigation']: BottomNavigationContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Layouts']: LayoutsContainer,
    ['Auth']: AuthContainer,
    ['Social']: SocialContainer,
    ['Articles']: ArticlesContainer,
    ['Messaging']: MessagingContainer,
    ['Dashboards']: DashboardsContainer,
    ['Ecommerce']: EcommerceContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator: NavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ComponentsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...AuthNavigationMap,
  ...SocialNavigationMap,
  ...ArticlesNavigationMap,
  ...MessagingNavigationMap,
  ...DarhboardsNavigationMap,
  ...EcommerceNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
