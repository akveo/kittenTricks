import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  BottomNavigationTitle,
  BottomNavigationIcon,
  BottomNavigationIconTitle,
  BottomNavigationFull,
} from './showcases';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { Showcase } from '../common/showcase.component';

export class BottomNavigationContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase style={styles.container}>
        <ShowcaseSection title='Title (No indicator)'>
          <BottomNavigationTitle/>
        </ShowcaseSection>
        <ShowcaseSection title='Icon (No indicator)'>
          <BottomNavigationIcon/>
        </ShowcaseSection>
        <ShowcaseSection title='Icon + Title (No indicator)'>
          <BottomNavigationIconTitle/>
        </ShowcaseSection>
        <ShowcaseSection title='Full API (With indicator)'>
          <BottomNavigationFull/>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
});
