import React from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@kitten/ui';
import {
  StarIcon,
  CameraIcon,
} from '@src/assets/icons';

interface State {
  selectedIndex: number;
}

export class BottomNavigationFull extends React.Component<{}, State> {

  public state: State = {
    selectedIndex: 0,
  };

  private onTabSelect = (selectedIndex: number): void => {
    this.setState({ selectedIndex });
  };

  public render(): React.ReactNode {
    const { selectedIndex } = this.state;

    return (
      <BottomNavigation
        selectedIndex={this.state.selectedIndex}
        indicatorStyle={selectedIndex === 1 ? styles.indicator : null}
        onSelect={this.onTabSelect}>
        <BottomNavigationTab
          title='Screen 1'
          titleStyle={styles.tab1Title}
          icon={StarIcon}
        />
        <BottomNavigationTab
          title='Screen 2'
          icon={selectedIndex === 1 ? CameraIcon : StarIcon}
        />
        <BottomNavigationTab
          title='Screen 3'
          icon={StarIcon}
        />
      </BottomNavigation>
    );
  }
}

const styles = StyleSheet.create({
  tab1Title: {
    color: 'tomato',
  },
  indicator: {
    backgroundColor: 'tomato',
  },
});
