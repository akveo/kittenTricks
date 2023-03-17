import React from 'react';
import { ShowcaseContainer } from '../../../components/showcase-container.component';
import { circularProgressBarSettings, circularProgressBarShowcase } from './type';
import { CircularProgressBarShowcase } from './circularProgressBar-showcase.component';

export const CircularProgressBarScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={circularProgressBarShowcase}
    settings={circularProgressBarSettings}
    renderItem={CircularProgressBarShowcase}
    onBackPress={navigation.goBack}>
  </ShowcaseContainer>
);

