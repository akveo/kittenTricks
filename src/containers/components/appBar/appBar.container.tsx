import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  TopNavigationStart,
  TopNavigationCenter,
} from './showcase';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

export class AppBarContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text
          style={styles.titleLabel}
          category='h6'>
          Title Start
        </Text>
        <TopNavigationStart/>
        <Text
          style={styles.titleLabel}
          category='h6'>
          Title Center
        </Text>
        <TopNavigationCenter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 24,
  },
  titleLabel: {
    marginVertical: 8,
    ...textStyle.headline,
  },
});
