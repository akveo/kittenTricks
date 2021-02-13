import React from 'react';
import { SelectElement, SelectProps } from '@ui-kitten/components';
import { SelectShowcase } from './select-showcase.component';
import { MultiselectShowcase } from './multiselect-showcase.component';
import { selectSettings, selectShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

interface ShowcaseProps extends SelectProps{
  data: any[];
}

export const SelectScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ShowcaseProps): SelectElement => {
    return props.multiSelect ? <MultiselectShowcase {...props} /> :<SelectShowcase {...props}/>
  };

  return (
    <ShowcaseContainer
      showcase={selectShowcase}
      settings={selectSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
