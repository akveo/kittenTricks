import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  List,
  ListItem,
  ListItemProps,
  ListProps,
} from '@kitten/ui';


interface ListItemModel {
  title: string;
  description: string;
}

type ListElement = React.ReactElement<ListProps>;
type ListItemElement = React.ReactElement<ListItemProps>;

export const PlainList = (): ListElement => {

  const data: ListItemModel[] = Array(4).fill({
    title: 'Title',
    description: [
      'Once upon a time when pigs spoke rhyme',
      'and monkeys chewed tobacco,',
      'and hens took snuff to make them tough,',
      'and ducks went quack, quack, quack, O!',
    ].join(' '),
  });

  const renderItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    const { title, description } = info.item;

    return (
      <ListItem
        title={title}
        description={description}
      />
    );
  };

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};
