import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import {
  IconTabView,
  IconTitleTabView,
  TitleTabView,
} from './showcase';

interface State {
  selectedTabIndex: number;
}

export class TabViewContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedTabIndex: 0,
  };

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Title'>
          <TitleTabView/>
        </ShowcaseSection>
        <ShowcaseSection title='Icon'>
          <IconTabView/>
        </ShowcaseSection>
        <ShowcaseSection title='Icon Title'>
          <IconTitleTabView/>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

