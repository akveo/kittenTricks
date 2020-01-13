import React from 'react';
import { RadioGroupElement, RadioGroupProps } from '@ui-kitten/components';
import { RadioGroupShowcase } from './radio-group-showcase.component';
import { radioGroupShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const RadioGroupScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: RadioGroupProps): RadioGroupElement => (
    <RadioGroupShowcase {...props}/>
  );

  return (
    <ShowcaseContainer
      showcase={radioGroupShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
