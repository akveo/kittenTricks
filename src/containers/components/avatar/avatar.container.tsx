import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  GiantAvatar,
  LargeAvatar,
  MediumAvatar,
  RoundAvatar,
  RoundedAvatar,
  SmallAvatar,
  SquareAvatar,
  TinyAvatar,
} from './showcase';

export class AvatarContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Size'>
          <ShowcaseItem title='Giant'>
            <GiantAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Large'>
            <LargeAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Medium'>
            <MediumAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Small'>
            <SmallAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Tiny'>
            <TinyAvatar />
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Shape'>
          <ShowcaseItem title='Square'>
            <SquareAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Rounded'>
            <RoundedAvatar />
          </ShowcaseItem>
          <ShowcaseItem title='Round'>
            <RoundAvatar />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
