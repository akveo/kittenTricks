import React from 'react';
import { SpinnerShowcase } from './spinner-showcase.component';
import { spinnerSettings, spinnerShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const SpinnerScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={spinnerShowcase}
    settings={spinnerSettings}
    renderItem={SpinnerShowcase}
    onBackPress={navigation.goBack}
  />
);
