import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Menu } from './menu.component';

export class MenuContainer extends React.Component<NavigationScreenProps> {

  private onTabSelect = (index: number) => {
    const { navigation } = this.props;
    const { [index]: selectedRoute } = navigation.state.routes;

    navigation.navigate(selectedRoute.routeName);
  };

  public render(): React.ReactNode {
    return (
      <Menu
        selectedIndex={this.props.navigation.state.index}
        onTabSelect={this.onTabSelect}
      />
    );
  }
}
