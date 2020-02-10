import React from 'react';
import { LayoutGridList, LayoutGridListElement } from '../../components/layout-grid-list.component';
import { data } from './data';

export const DashboardGridScreen = ({ navigation }): LayoutGridListElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <LayoutGridList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
