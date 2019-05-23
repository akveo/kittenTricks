import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@kitten/ui';

interface State {
  selectedIndex: number;
}

export class BottomNavigationTitle extends React.Component<{}, State> {

  public state: State = {
    selectedIndex: 0,
  };

  private onTabSelect = (selectedIndex: number): void => {
    this.setState({ selectedIndex });
  };

  public render(): React.ReactNode {

    return (
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect}>
        <BottomNavigationTab title='Screen 1'/>
        <BottomNavigationTab title='Screen 2'/>
        <BottomNavigationTab title='Screen 3'/>
      </BottomNavigation>
    );
  }
}
