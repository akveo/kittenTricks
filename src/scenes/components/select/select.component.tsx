import React from 'react';
import { SelectShowcase } from './select-showcase.component';
import { selectSettings, selectShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const SelectScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={selectShowcase}
    settings={selectSettings}
    renderItem={SelectShowcase}
    onBackPress={navigation.goBack}
  />
);
