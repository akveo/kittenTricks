import React from 'react';
import { SelectElement, SelectProps } from '@ui-kitten/components';
import { SelectShowcase } from './select-showcase.component';
import { selectSettings, selectShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const SelectScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: SelectProps): SelectElement => (
    <SelectShowcase {...props}/>
  );

  return (
    <ShowcaseContainer
      showcase={selectShowcase}
      settings={selectSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
