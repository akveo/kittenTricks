import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Button, ListProps } from '@ui-kitten/components';

export type CategoryListProps = Omit<ListProps, 'renderItem'>;

export type CategoryListItem = string;

export const CategoryList = (props: CategoryListProps): React.ReactElement<ViewProps> => {

  const { style, data, ...viewProps } = props;

  const renderItem = (item: CategoryListItem, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.item}
      size='tiny'>
      {item}
    </Button>
  );

  return (
    <View
      {...viewProps}
      style={[styles.container, style]}>
      {data.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    borderRadius: 16,
    marginHorizontal: 4,
  },
});
