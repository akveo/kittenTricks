import React from 'react';
import { Dimensions, Image, ListRenderItemInfo, StyleSheet, View, ViewProps } from 'react-native';
import { Card, List, ListElement, ListProps, Text } from '@ui-kitten/components';
import { LayoutItem } from '../model/layout-item.model';

export interface LayoutGridListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutItem[];
  onItemPress: (index: number) => void;
}

export type LayoutGridListElement = React.ReactElement<LayoutGridListProps>;

export const LayoutGridList = (props: LayoutGridListProps): ListElement => {

  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItemHeader = (evaProps: ViewProps, info: ListRenderItemInfo<LayoutItem>): React.ReactElement => (
    <View style={[evaProps.style, styles.itemHeader]}>
      <Text category='h6'>{info.item.title}</Text>
      <Text category='s2'>{info.item.description}</Text>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<LayoutItem>): React.ReactElement => (
    <Card
      style={styles.itemContainer}
      header={evaProps => renderItemHeader(evaProps, info)}
      onPress={() => onItemPress(info.index)}>
      <Image
        style={styles.itemImage}
        source={info.item.image}
      />
    </Card>
  );

  return (
    <List
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemHeader: {
    paddingHorizontal: 8,
  },
  itemImage: {
    height: 276,
    width: '100%',
    resizeMode: 'contain',
  },
});
