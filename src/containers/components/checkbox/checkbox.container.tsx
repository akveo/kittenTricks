import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CheckedCheckBox,
  CheckedDisabledCheckBox,
  DangerCheckBox,
  IndeterminateCheckBox,
  InfoCheckBox,
  PrimaryCheckBox,
  SuccessCheckBox,
  TextCheckBox,
  UncheckedCheckBox,
  UncheckedDisabledCheckBox,
  WarningCheckBox,
} from './showcase';

export class CheckBoxContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Checked'>
            <CheckedCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked'>
            <UncheckedCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Checked Disabled'>
            <CheckedDisabledCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Unchecked Disabled'>
            <UncheckedDisabledCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Indeterminate'>
            <IndeterminateCheckBox/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Text'>
            <TextCheckBox/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningCheckBox/>
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerCheckBox/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
