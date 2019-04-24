import React from 'react';
import {
  NavigationParams,
  NavigationScreenProps,
} from 'react-navigation';
import { MenuContainer } from '@src/containers/menu';
import { BackArrowIcon } from '@src/assets/icons';
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

const TopNavigationDisabledParams: TopNavigationParams = {
  topNavigation: (props: NavigationScreenProps): null => {
    return null;
  },
};

const BottomNavigationDisabledParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationScreenProps): null => {
    return null;
  },
};

const MenuTopNavigationParams: TopNavigationParams = {
  topNavigation: (props: NavigationScreenProps): TopNavigationElement => {
    const state: NavigationRouteState = getCurrentRouteState(props.navigation);

    return (
      <TopNavigationBar
        {...props}
        title={state.routeName}
        backIcon={!state.params.root && BackArrowIcon}
        onBackPress={() => {
          props.navigation.goBack(null);
        }}
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
  ...BottomNavigationDisabledParams,
};

export const MessagingNavigatorParams: NavigationParams = {
  ...MenuTopNavigationParams,
  ...BottomNavigationDisabledParams,
};

export const FullscreenParams: TopNavigationParams & BottomNavigationParams = {
  ...TopNavigationDisabledParams,
  ...BottomNavigationDisabledParams,
};


