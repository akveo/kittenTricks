import React from 'react';
import { LayoutList, LayoutListElement } from '../../components/layout-list.component';
import { data } from './data';

export const DashboardsListScreen = (props): LayoutListElement => {

  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  return (
    <LayoutList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
