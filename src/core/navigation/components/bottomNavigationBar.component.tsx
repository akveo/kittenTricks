import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { getCurrentRouteState } from '../routeUtil';

export type BottomNavigationBarProps = NavigationScreenProps;

export const BottomNavigationBar = (props?: BottomNavigationBarProps): React.ReactElement<any> => {
  const { params } = getCurrentRouteState(props.navigation);

  return params && params.bottomNavigation && params.bottomNavigation(props);
};
