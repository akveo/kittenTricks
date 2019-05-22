import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { ViewPager } from '@kitten/ui';
import { NavigationScreenProps } from 'react-navigation';

interface State {
  selectedIndex: number;
}

export class ViewPagerContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedIndex: 0,
  };

  private onIndexChange = (selectedIndex: number) => {
    this.setState({ selectedIndex });
  };

  private shouldLoadPageContent = (index: number): boolean => {
    return index === this.state.selectedIndex;
  };

  public render(): React.ReactNode {
    return (
      <ViewPager
        selectedIndex={this.state.selectedIndex}
        contentContainerStyle={styles.container}
        shouldLoadComponent={this.shouldLoadPageContent}
        onSelect={this.onIndexChange}>
        <View style={styles.tabContainer}>
          <Text>Swipe next</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text>Swipe next</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text>You're done</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 18,
  },
});
