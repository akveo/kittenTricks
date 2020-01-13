import React from 'react';
import { DatepickerElement, DatepickerProps } from '@ui-kitten/components';
import { DatepickerShowcase } from './datepicker-showcase.component';
import { datepickerShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const DatepickerScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: DatepickerProps): DatepickerElement => (
    <DatepickerShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={datepickerShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
