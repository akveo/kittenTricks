import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  CaptionIconInput,
  CaptionInput,
  DangerInput,
  DefaultInput,
  DisabledInput,
  IconInput,
  InfoInput,
  LabelInput,
  PrimaryInput,
  SuccessInput,
  WarningInput,
} from './showcase';

export class InputContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Default'>
            <DefaultInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Disabled'>
            <DisabledInput style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Icon'>
            <IconInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Label'>
            <LabelInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Caption'>
            <CaptionInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Caption Icon'>
            <CaptionIconInput style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningInput style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerInput style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});
