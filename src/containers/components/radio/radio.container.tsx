import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CheckedDisabledRadio,
  CheckedRadio,
  DangerRadio,
  InfoRadio,
  PrimaryRadio,
  SuccessRadio,
  TextRadio,
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
