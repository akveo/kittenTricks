import React from 'react';
import { LayoutGridList, LayoutGridListElement } from '../../components/layout-grid-list.component';
import { data } from './data';

export const SocialGridScreen = (props): LayoutGridListElement => {

  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  return (
    <LayoutGridList
      data={data}
      onItemPress={onItemPress}
    />
  );
};
