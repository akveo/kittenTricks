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

export interface AppBarProps {
  navigation: NavigationScreenProp<NavigationRoute>;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
}

export class AppBar extends React.Component<AppBarProps> {

  private onBackButtonPress = () => {
    this.props.navigation.goBack(null);
  };

  private isCurrentRoute = (route: NavigationRoute, index: number): boolean => {
    return this.props.navigation.state.index === index;
  };

  private getCurrentRoute = (): NavigationRoute => {
    if (this.props.navigation.state.routes) {
      return this.props.navigation.state.routes.find(this.isCurrentRoute);
    }

    return this.props.navigation.state;
  };

  private renderBackButton = (): React.ReactElement<TopNavigationBarActionProps> => {
    return (
      <TopNavigationBarAction
        icon={this.props.backIcon}
        onPress={this.onBackButtonPress}
      />
    );
  };

  private renderBackButtonIfNeeded = (): React.ReactElement<TopNavigationBarActionProps> | null => {
    const { index: currentNavigationIndex } = this.props.navigation.state;

    return currentNavigationIndex ? this.renderBackButton() : null;
  };

  public render(): React.ReactNode {
    const { routeName } = this.getCurrentRoute();

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
