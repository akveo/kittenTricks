import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { TabViewShowcase } from './tabView.component';

interface State {
  selectedTabIndex: number;
}

export class TabViewContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedTabIndex: 0,
  };

  private onTabPress = (selectedTabIndex: number): void => {
    this.setState({ selectedTabIndex });
  };

  public render(): React.ReactNode {
    return (
      <TabViewShowcase
        selectedIndex={this.state.selectedTabIndex}
        onTabSelect={this.onTabPress}
      />
    );
  }
}
