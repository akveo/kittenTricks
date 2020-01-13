import React from 'react';
import { CardShowcase } from './card-showcase.component';
import { cardSettings, cardShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const CardScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={cardShowcase}
    settings={cardSettings}
    renderItem={CardShowcase}
    onBackPress={navigation.goBack}
  />
);
