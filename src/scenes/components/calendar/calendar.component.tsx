import React from 'react';
import { CalendarElement, CalendarProps } from '@ui-kitten/components';
import { CalendarShowcase } from './calendar-showcase.component';
import { calendarShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const CalendarScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: CalendarProps): CalendarElement => (
    <CalendarShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={calendarShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
