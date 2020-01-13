import React from 'react';
import { LayoutList } from '../../components/layout-list.component';
import { data } from './data';

export const ArticlesListScreen = (props): React.ReactElement => {

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
