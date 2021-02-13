import React from 'react';
import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {
  Card,
  CardElement,
  List,
  ListElement,
  ListProps,
  Layout,
  Text,
} from '@ui-kitten/components';
import { LayoutItem } from '../model/layout-item.model';

export interface LayoutGridListProps extends Omit<ListProps, 'renderItem'> {
  data: LayoutItem[];
  onItemPress: (index: number) => void;
}

export type LayoutGridListElement = React.ReactElement<LayoutGridListProps>;

export const LayoutGridList = (props: LayoutGridListProps): ListElement => {
  const { contentContainerStyle, onItemPress, ...listProps } = props;

  const renderItem = (info: ListRenderItemInfo<LayoutItem>): CardElement => {
    const renderItemHeader = (evaProps): React.ReactElement => (
      <Layout {...evaProps}>
        <Text category='h6'>{info.item.title}</Text>
        <Text category='s1'>{info.item.description}</Text>
      </Layout>
    );

    return (
      <Card
        style={styles.itemContainer}
        header={renderItemHeader}
        onPress={() => onItemPress(info.index)}>
        <Image style={styles.itemImage} source={info.item.image} />
      </Card>
    );
  };

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
  itemHeader: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemImage: {
    height: 276,
    width: '100%',
    resizeMode: 'contain',
  },
});
