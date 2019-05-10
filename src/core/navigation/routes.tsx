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
  ArticlesContainer,
  Article1Container,
  Article2Container,
  Article3Container,
  ArticleList1Container,
  ArticleList2Container,
  ArticleList3Container,
  ArticleList4Container,
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
  EcommerceContainer,
  AddNewCardContainer,
  BookDetailsContainer,
  MovieDetailsContainer,
  PaymentContainer,
  ProductDetailsContainer,
  ProductsListContainer,
  RentApartmentContainer,
  ShoppingCartContainer,
} from '@src/containers/layouts/ecommerce';
import {
  MessagingContainer,
  Chat1Container,
  Chat2Container,
  Chat3Container,
  ConversationsListContainer,
} from '@src/containers/layouts/messaging';
import { NavigationContainer } from '@src/containers/layouts/navigation';
import {
  SocialContainer,
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
} from '@src/containers/layouts/social';
import { WalkthroughContainer } from '@src/containers/layouts/walkthrough';
import {
  AvatarContainer,
  ButtonContainer,
  ButtonGroupContainer,
  CheckBoxContainer,
  InputContainer,
  RadioContainer,
  TextContainer,
  ToggleContainer,
  TabViewContainer,
  PopoverContainer,
  TooltipContainer,
  OverflowMenuContainer,
  ListContainer,
} from '@src/containers/components';
import {
  MenuNavigatorParams,
  TopNavigationElement,
  RootNavigatorParams,
  MessagingNavigatorParams,
  SocialNavigatorParams,
  ArticlesNavigatorParams,
  DashboardsNavigatorParams,
  EcommerceNavigatorParams,
  ComponentShowcaseNavigatorParams,
  WalkthroughNavigatorParams,
  NavigationNavigatorParams,
} from './navigationParams';
import { BottomNavigationBar } from './components/bottomNavigationBar.component';
import { getCurrentRouteState } from './routeUtil';

const HeadingNavigationOptions = ({ navigation }) => {

  const header = (headerProps: HeaderProps): TopNavigationElement | null => {
    const { params } = getCurrentRouteState(navigation);

    return params && params.topNavigation && params.topNavigation(headerProps);
  };

  return {
    ...navigation,
    header,
  };
};

const NavigationNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Navigation']: {
      screen: NavigationContainer,
      params: NavigationNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const EcommerceNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Ecommerce']: {
      screen: EcommerceContainer,
      params: MenuNavigatorParams,
    },
    ['Add New Card']: {
      screen: AddNewCardContainer,
      params: EcommerceNavigatorParams,
    },
    ['Payment']: {
      screen: PaymentContainer,
      params: EcommerceNavigatorParams,
    },
    ['Products List']: {
      screen: ProductsListContainer,
      params: EcommerceNavigatorParams,
    },
    ['Product Details']: {
      screen: ProductDetailsContainer,
      params: EcommerceNavigatorParams,
    },
    ['Shopping Cart']: {
      screen: ShoppingCartContainer,
      params: EcommerceNavigatorParams,
    },
    ['Rent Apartment']: {
      screen: RentApartmentContainer,
      params: EcommerceNavigatorParams,
    },
    ['Movie Details']: {
      screen: MovieDetailsContainer,
      params: EcommerceNavigatorParams,
    },
    ['Book Details']: {
      screen: BookDetailsContainer,
      params: EcommerceNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const WalkthroughNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Walkthrough']: {
      screen: WalkthroughContainer,
      params: WalkthroughNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const DashboardsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Dashboards']: {
      screen: DashboardsContainer,
      params: MenuNavigatorParams,
    },
    ['Trainings 1']: {
      screen: Trainings1Container,
      params: DashboardsNavigatorParams,
    },
    ['Trainings 2']: {
      screen: Trainings2Container,
      params: DashboardsNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const MessagingNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Messaging']: {
      screen: MessagingContainer,
      params: MenuNavigatorParams,
    },
    ['Conversations List']: ConversationsListContainer,
    ['Chat 1']: Chat1Container,
    ['Chat 2']: {
      screen: Chat2Container,
      params: MessagingNavigatorParams,
    },
    ['Chat 3']: {
      screen: Chat3Container,
      params: MessagingNavigatorParams,
    },
    ['Profile 1']: {
      screen: Profile1Container,
      params: SocialNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const ArticlesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Articles']: {
      screen: ArticlesContainer,
      params: MenuNavigatorParams,
    },
    ['Article List 1']: {
      screen: ArticleList1Container,
      params: ArticlesNavigatorParams,
    },
    ['Article List 2']: {
      screen: ArticleList2Container,
      params: ArticlesNavigatorParams,
    },
    ['Article List 3']: {
      screen: ArticleList3Container,
      params: ArticlesNavigatorParams,
    },
    ['Article List 4']: {
      screen: ArticleList4Container,
      params: ArticlesNavigatorParams,
    },
    ['Article 1']: {
      screen: Article1Container,
      params: ArticlesNavigatorParams,
    },
    ['Article 2']: {
      screen: Article2Container,
      params: ArticlesNavigatorParams,
    },
    ['Article 3']: {
      screen: Article3Container,
      params: ArticlesNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const SocialNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Social']: {
      screen: SocialContainer,
      params: MenuNavigatorParams,
    },
    ['Profile 1']: {
      screen: Profile1Container,
      params: SocialNavigatorParams,
    },
    ['Profile 2']: {
      screen: Profile2Container,
      params: SocialNavigatorParams,
    },
    ['Profile 3']: {
      screen: Profile3Container,
      params: SocialNavigatorParams,
    },
    ['Profile 4']: {
      screen: Profile4Container,
      params: SocialNavigatorParams,
    },
    ['Profile 5']: {
      screen: Profile5Container,
      params: SocialNavigatorParams,
    },
    ['Profile 6']: {
      screen: Profile6Container,
      params: SocialNavigatorParams,
    },
    ['Profile 7']: {
      screen: Profile7Container,
      params: SocialNavigatorParams,
    },
    ['Profile Settings 1']: {
      screen: ProfileSettings1Container,
      params: SocialNavigatorParams,
    },
    ['Profile Settings 2']: {
      screen: ProfileSettings2Container,
      params: SocialNavigatorParams,
    },
    ['Profile Settings 3']: {
      screen: ProfileSettings3Container,
      params: SocialNavigatorParams,
    },
    ['Feed 1']: {
      screen: Feed1Container,
      params: SocialNavigatorParams,
    },
    ['Feed 2']: {
      screen: Feed2Container,
      params: SocialNavigatorParams,
    },
    ['Settings']: {
      screen: SettingsContainer,
      params: SocialNavigatorParams,
    },
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
    ['Sign In 5']: SignIn5Container,
    ['Sign Up 1']: SignUp1Container,
    ['Sign Up 2']: SignUp2Container,
    ['Sign Up 3']: SignUp3Container,
    ['Sign Up 4']: SignUp4Container,
    ['Forgot Password']: ForgotPasswordContainer,
  },
  {
    headerMode: 'none',
    initialRouteParams: MenuNavigatorParams,
  },
);

const ThemesNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Themes']: {
      screen: ThemesContainer,
      params: { ...RootNavigatorParams, ...MenuNavigatorParams },
    },
  },
  {
    headerMode: 'none',
  },
);

const ComponentsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Components']: {
      screen: ComponentsContainer,
      params: { ...RootNavigatorParams, ...MenuNavigatorParams },
    },
    ['Button']: {
      screen: ButtonContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Button Group']: {
      screen: ButtonGroupContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['CheckBox']: {
      screen: CheckBoxContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Toggle']: {
      screen: ToggleContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Radio']: {
      screen: RadioContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Input']: {
      screen: InputContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Text']: {
      screen: TextContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Avatar']: {
      screen: AvatarContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Tab View']: {
      screen: TabViewContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Popover']: {
      screen: PopoverContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Tooltip']: {
      screen: TooltipContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['Overflow Menu']: {
      screen: OverflowMenuContainer,
      params: ComponentShowcaseNavigatorParams,
    },
    ['List']: {
      screen: ListContainer,
      params: ComponentShowcaseNavigatorParams,
    },
  },
  {
    headerMode: 'none',
  },
);

const LayoutsNavigator: ReactNavigationContainer = createStackNavigator(
  {
    ['Layouts']: {
      screen: LayoutsContainer,
      params: { ...RootNavigatorParams, ...MenuNavigatorParams },
    },
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
