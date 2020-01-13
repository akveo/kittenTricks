import React from 'react';
import { RangeDatepickerElement, RangeDatepickerProps } from '@ui-kitten/components';
import { RangeDatepickerShowcase } from './range-datepicker-showcase.component';
import { rangeDatepickerShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const RangeDatepickerScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: RangeDatepickerProps): RangeDatepickerElement => (
    <RangeDatepickerShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={rangeDatepickerShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
