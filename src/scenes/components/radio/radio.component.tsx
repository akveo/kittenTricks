import React from 'react';
import { RadioElement, RadioProps } from '@ui-kitten/components';
import { RadioShowcase } from './radio-showcase.component';
import { radioSettings, radioShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const RadioScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: RadioProps): RadioElement => (
    <RadioShowcase {...props}/>
  );

  return (
    <ShowcaseContainer
      showcase={radioShowcase}
      settings={radioSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
