import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  DangerButton,
  DefaultButton,
  DisabledButton,
  FilledButton,
  GhostButton,
  GiantButton,
  InfoButton,
  LargeButton,
  LeftIconButton,
  MediumButton,
  OutlineButton,
  PrimaryButton,
  RightIconButton,
  SmallButton,
  SuccessButton,
  TinyButton,
  WarningButton,
  WhiteButton,
} from './showcase';

export class ButtonContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='State'>
          <ShowcaseItem title='Default'>
            <DefaultButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Disabled'>
            <DisabledButton style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Left Icon'>
            <LeftIconButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Right Icon'>
            <RightIconButton style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Appearance'>
          <ShowcaseItem title='Filled'>
            <FilledButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Outline'>
            <OutlineButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Ghost'>
            <GhostButton style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Size'>
          <ShowcaseItem title='Giant'>
            <GiantButton/>
          </ShowcaseItem>
          <ShowcaseItem title='Large'>
            <LargeButton/>
          </ShowcaseItem>
          <ShowcaseItem title='Medium'>
            <MediumButton/>
          </ShowcaseItem>
          <ShowcaseItem title='Small'>
            <SmallButton/>
          </ShowcaseItem>
          <ShowcaseItem title='Tiny'>
            <TinyButton/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerButton style={styles.component}/>
          </ShowcaseItem>
          <ShowcaseItem title='White'>
            <WhiteButton style={styles.component}/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  component: {
    flex: 1,
  },
});
