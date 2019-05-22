import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  TopNavigationStart,
  TopNavigationCenter,
} from './showcase';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { Showcase } from '../common/showcase.component';

export class AppBarContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase style={styles.container}>
        <ShowcaseSection title='Title Start'>
          <TopNavigationStart/>
        </ShowcaseSection>
        <ShowcaseSection title='Title Center'>
          <TopNavigationCenter/>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8FA',
  },
});
