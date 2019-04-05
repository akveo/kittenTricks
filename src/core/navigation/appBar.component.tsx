import React from 'react';
import {
  NavigationRoute,
  NavigationScreenProp,
  SafeAreaView,
} from 'react-navigation';
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import { StyleType } from '@kitten/theme';
import {
  TopNavigationBar,
  TopNavigationBarAction,
  TopNavigationBarActionProps,
} from '@kitten/ui';

interface NavigationState {
  index: number;
  routes: any[];
  routeName: string;

  [key: string]: any;
}

export interface AppBarProps {
  navigation: NavigationScreenProp<NavigationRoute>;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
}

export class AppBar extends React.Component<AppBarProps> {

  private onBackButtonPress = () => {
    this.props.navigation.goBack(null);
  };

  private getRouteName = (): string => {
    const findCurrentRoute = (state: NavigationState) => {
      if (state.routes && state.routes.length !== 0) {
        return findCurrentRoute(state.routes[state.index]);
      }
      return state.routeName;
    };
    return findCurrentRoute(this.props.navigation.state);
  };

  private renderBackButton = (): React.ReactElement<TopNavigationBarActionProps> => {
    return (
      <TopNavigationBarAction
        icon={this.props.backIcon}
        onPress={this.onBackButtonPress}
      />
    );
  };

  private isHomeScreen = (): boolean => {
    const homeRoutes: string[] = this.props.navigation.state.routes
      .map(route => route.key);
    return homeRoutes.some((route: string) => route === this.getRouteName());
  };

  private renderBackButtonIfNeeded = (): React.ReactElement<TopNavigationBarActionProps> | null => {
    return !this.isHomeScreen() ? this.renderBackButton() : null;
  };

  public render(): React.ReactNode {
    const routeName: string = this.getRouteName();

    return (
      <SafeAreaView style={styles.safeArea}>
        <TopNavigationBar
          appearance='titleCentered'
          title={routeName}
          leftControl={this.renderBackButtonIfNeeded()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#3366FF',
  },
});
