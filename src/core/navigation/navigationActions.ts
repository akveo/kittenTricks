import {
  NavigationActions,
  NavigationNavigateAction,
} from 'react-navigation';

// Prevents double navigation
// https://github.com/react-navigation/rfcs/issues/16#issuecomment-366546992

const ROOT_NAVIGATION_KEY: string = '@kitten-tricks/root';

export const navigateAction = (route: string): NavigationNavigateAction => {
  return NavigationActions.navigate({
    key: ROOT_NAVIGATION_KEY,
    routeName: route,
  });
};
