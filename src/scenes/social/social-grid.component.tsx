import React from 'react';
import { LayoutGridList } from '../../components/layout-grid-list.component';
import { data } from './data';

export const SocialGridScreen = ({ navigation }): React.ReactElement => {

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
