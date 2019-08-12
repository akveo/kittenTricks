import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  C1Text,
  C2Text,
  DangerText,
  H1Text,
  H2Text,
  H3Text,
  H4Text,
  H5Text,
  H6Text,
  InfoText,
  LabelText,
  P1Text,
  P2Text,
  PrimaryText,
  S1Text,
  S2Text,
  SuccessText,
  WarningText,
} from './showcase';

export class TextContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Category'>
          <ShowcaseItem title='H1 Headline'>
            <H1Text />
          </ShowcaseItem>
          <ShowcaseItem title='H2 Headline'>
            <H2Text />
          </ShowcaseItem>
          <ShowcaseItem title='H3 Headline'>
            <H3Text />
          </ShowcaseItem>
          <ShowcaseItem title='H4 Headline'>
            <H4Text />
          </ShowcaseItem>
          <ShowcaseItem title='H5 Headline'>
            <H5Text />
          </ShowcaseItem>
          <ShowcaseItem title='H6 Headline'>
            <H6Text />
          </ShowcaseItem>
          <ShowcaseItem title='S1 Subtitle'>
            <S1Text />
          </ShowcaseItem>
          <ShowcaseItem title='S2 Subtitle'>
            <S2Text />
          </ShowcaseItem>
          <ShowcaseItem title='P1 Paragraph'>
            <P1Text />
          </ShowcaseItem>
          <ShowcaseItem title='P2 Paragraph'>
            <P2Text />
          </ShowcaseItem>
          <ShowcaseItem title='C1 Caption'>
            <C1Text />
          </ShowcaseItem>
          <ShowcaseItem title='C2 Caption'>
            <C2Text />
          </ShowcaseItem>
          <ShowcaseItem title='Label'>
            <LabelText />
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Status'>
          <ShowcaseItem title='Primary'>
            <PrimaryText />
          </ShowcaseItem>
          <ShowcaseItem title='Success'>
            <SuccessText />
          </ShowcaseItem>
          <ShowcaseItem title='Info'>
            <InfoText />
          </ShowcaseItem>
          <ShowcaseItem title='Warning'>
            <WarningText />
          </ShowcaseItem>
          <ShowcaseItem title='Danger'>
            <DangerText />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
