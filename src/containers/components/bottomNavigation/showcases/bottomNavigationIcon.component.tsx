import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

interface State {
  selectedIndex: number;
}

export class BottomNavigationIcon extends React.Component<{}, State> {

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
        <BottomNavigationTab icon={StarIcon}/>
        <BottomNavigationTab icon={StarIcon}/>
        <BottomNavigationTab icon={StarIcon}/>
      </BottomNavigation>
    );
  }
}
