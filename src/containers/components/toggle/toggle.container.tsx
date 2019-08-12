import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CheckedDisabledToggle,
  CheckedToggle,
  DangerToggle,
  GiantToggle,
  InfoToggle,
  LargeToggle,
  MediumToggle,
  PrimaryToggle,
  SmallToggle,
  SuccessToggle,
  TinyToggle,
  UncheckedDisabledToggle,
  UncheckedToggle,
  WarningToggle,
} from './showcase';

export class ToggleContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Checked'>
            <CheckedToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked'>
            <UncheckedToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Checked Disabled'>
            <CheckedDisabledToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked Disabled'>
            <UncheckedDisabledToggle/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Size'>
          <ShowcaseItem title='Giant'>
            <GiantToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Large'>
            <LargeToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Medium'>
            <MediumToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Small'>
            <SmallToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Tiny'>
            <TinyToggle/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningToggle/>
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerToggle/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
