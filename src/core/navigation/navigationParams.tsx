import React from 'react';
import { Alert } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProps,
} from 'react-navigation';
import { EcommerceHeader } from '@src/components/ecommerce';
import { MenuContainer } from '@src/containers/menu';
import { ArrowIosBackFill } from '@src/assets/icons';
import { TopNavigationBar } from './components/topNavigationBar.component';
import {
  getCurrentRouteState,
  NavigationRouteState,
} from './routeUtil';

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  topNavigation: (props: NavigationScreenProps) => TopNavigationElement | null;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (props: NavigationScreenProps) => BottomNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  topNavigation: (props: NavigationScreenProps): TopNavigationElement => {
    const state: NavigationRouteState = getCurrentRouteState(props.navigation);

    return (
      <TopNavigationBar
        {...props}
        title={state.routeName}
        backIcon={!state.params.root && ArrowIosBackFill}
        onBackPress={() => {
          props.navigation.goBack(null);
        }}
      />
    );
  },
};

const EcommerceMenuTopNavigationParams: TopNavigationParams = {
  topNavigation: (props: NavigationScreenProps): TopNavigationElement => {
    const state: NavigationRouteState = getCurrentRouteState(props.navigation);

    const onBackPress = (): void => {
      props.navigation.goBack(null);
    };

    const onSearchPress = (): void => {
      Alert.alert('Search...');
    };

    const onShoppingCartPress = (): void => {
      props.navigation.navigate('Shopping Cart');
    };

    return (
      <EcommerceHeader
        title={state.routeName}
        onBack={onBackPress}
        onSearch={onSearchPress}
        onShoppingCart={onShoppingCartPress}
      />
    );
  },
};

const MenuBottomNavigationParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationScreenProps): BottomNavigationElement => {
    return (
      <MenuContainer {...props} />
    );
  },
};

export const RootNavigatorParams: NavigationParams = {
  root: true,
};

export const MenuNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
  ...MenuBottomNavigationParams,
};

export const SocialNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const ArticlesNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const MessagingNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const DashboardsNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const WalkthroughNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const EcommerceNavigatorParams: NavigationParams = {
  ...EcommerceMenuTopNavigationParams,
};

export const NavigationNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};

export const ComponentShowcaseNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
};


