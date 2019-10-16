import {
  NavigationParams,
  NavigationRoute,
} from 'react-navigation';

export type RouteParams = NavigationParams;
export type RouteState<P = RouteParams> = NavigationRoute<P>;

/**
 * Index refers to the active child route in the routes array.
 */
export const getCurrentStateName = (state: RouteState): string => {
  // @ts-ignore
  return findCurrentRoute(state).routeName;
};

export const getCurrentRouteState = (navigation: any): RouteState => {
  // @ts-ignore
  return findCurrentRoute(navigation.state);
};

export const getCurrentRouteIndex = (navigation: any): number => {
  return navigation.state.index;
};

const findCurrentRoute = (state: RouteState): RouteState => {
  if (state.routes && state.routes.length !== 0) {
    return findCurrentRoute(state.routes[state.index]);
  }

  return state;
};

export const isRootRoute = (index: number): boolean => {
  return index !== 0;
};
