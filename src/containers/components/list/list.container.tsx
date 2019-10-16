import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import {
  AccessoryList,
  IconList,
  PlainList,
} from './showcase';

export class ListContainer extends React.Component<NavigationStackScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Plain'>
          <PlainList />
        </ShowcaseSection>
        <ShowcaseSection title='Icon'>
          <IconList />
        </ShowcaseSection>
        <ShowcaseSection title='Accessory'>
          <AccessoryList />
        </ShowcaseSection>
      </Showcase>
    );
  }
}
