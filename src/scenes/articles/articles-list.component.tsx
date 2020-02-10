import React from 'react';
import { LayoutList } from '../../components/layout-list.component';
import { data } from './data';

export const ArticlesListScreen = ({ navigation }): React.ReactElement => {

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
