import React from 'react';
import {
  NavigationRoute,
  NavigationScreenProp,
  SafeAreaView,
} from 'react-navigation';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { StyleType } from '@kitten/theme';
import {
  TopNavigationBar,
  TopNavigationBarAction,
  TopNavigationBarActionProps,
} from '@kitten/ui';

export interface AppBarProps {
  backIcon: ImageSourcePropType;
  navigation: NavigationScreenProp<NavigationRoute>;
}

export class AppBar extends React.Component<AppBarProps> {

  private onBackButtonPress = () => {
    this.props.navigation.goBack(null);
  };

  private isCurrentRoute = (route: NavigationRoute, index: number): boolean => {
    return this.props.navigation.state.index === index;
  };

  private getCurrentRoute = (): NavigationRoute => {
    return this.props.navigation.state.routes.find(this.isCurrentRoute);
  };

  private renderBackButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return (
      <Image
        style={style}
        source={this.props.backIcon}
      />
    );
  };

  private renderBackButton = (): React.ReactElement<TopNavigationBarActionProps> => {
    return (
      <TopNavigationBarAction
        icon={this.renderBackButtonIcon}
        onPress={this.onBackButtonPress}
      />
    );
  };

  private renderBackButtonIfNeeded = (): React.ReactElement<TopNavigationBarActionProps> | null => {
    const { index: currentNavigationIndex } = this.props.navigation.state;

    return currentNavigationIndex === 0 ? null : this.renderBackButton();
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
