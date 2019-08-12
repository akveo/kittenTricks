import React from 'react';
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
      <Showcase>
        <ShowcaseSection title='Title'>
          <BottomNavigationTitle/>
        </ShowcaseSection>
        <ShowcaseSection title='Icon'>
          <BottomNavigationIcon/>
        </ShowcaseSection>
        <ShowcaseSection title='Title & Icon'>
          <BottomNavigationIconTitle/>
        </ShowcaseSection>
        <ShowcaseSection title='Indicator'>
          <BottomNavigationFull/>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
