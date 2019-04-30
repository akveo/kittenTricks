import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CheckedDisabledRadio,
  CheckedRadio,
  DangerRadio,
  GiantRadio,
  InfoRadio,
  LargeRadio,
  MediumRadio,
  PrimaryRadio,
  SmallRadio,
  SuccessRadio,
  TextRadio,
  TinyRadio,
  UncheckedDisabledRadio,
  UncheckedRadio,
  WarningRadio,
} from './showcase';

export class RadioContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Checked'>
            <CheckedRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked'>
            <UncheckedRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Checked Disabled'>
            <CheckedDisabledRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked Disabled'>
            <UncheckedDisabledRadio/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Text'>
            <TextRadio/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Size'>
          <ShowcaseItem title='Giant'>
            <GiantRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Large'>
            <LargeRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Medium'>
            <MediumRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Small'>
            <SmallRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Tiny'>
            <TinyRadio/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningRadio/>
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerRadio/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
