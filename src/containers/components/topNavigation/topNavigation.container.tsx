import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  StartTopNavigation,
  CenterTopNavigation,
} from './showcase';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { Showcase } from '../common/showcase.component';

export class TopNavigationContainer extends React.Component<NavigationStackScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Title Start'>
          <StartTopNavigation/>
        </ShowcaseSection>
        <ShowcaseSection title='Title Center'>
          <CenterTopNavigation/>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
