import React from 'react';
import { progressBarSettings, progressBarShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';
import { ProgressBarShowcase } from './progressBar-showcase.component';

export const ProgressBarScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={progressBarShowcase}
    settings={progressBarSettings}
    renderItem={ProgressBarShowcase}
    onBackPress={navigation.goBack}>
  </ShowcaseContainer>
);

