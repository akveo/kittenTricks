import React from 'react';
import { LayoutList, LayoutListElement } from '../../components/layout-list.component';
import { data } from './data';

export const EcommerceListScreen = ({ navigation }): LayoutListElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <LayoutList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
