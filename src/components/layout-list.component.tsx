import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Card, CardElement, List, ListElement, ListProps, Text } from '@ui-kitten/components';
import { LayoutItem } from '../model/layout-item.model';

export interface LayoutListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutItem[];
  onItemPress: (index: number) => void;
}

export type LayoutListElement = React.ReactElement<LayoutListProps>;

export const LayoutList = (props: LayoutListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItem = (info: ListRenderItemInfo<LayoutItem>): CardElement => (
    <Card
      style={styles.itemContainer}
      onPress={() => onItemPress(info.index)}>
      <Text
        category='s1'>
        {info.item.title}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  itemDescription: {
    marginTop: 4,
  },
});
