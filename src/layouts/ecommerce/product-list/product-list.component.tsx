import React from 'react';
import { Dimensions, ImageBackground, ListRenderItemInfo, View } from 'react-native';
import { Button, Card, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { CartIcon } from './extra/icons';
import { Product } from './extra/data';

const products: Product[] = [
  Product.pinkChair(),
  Product.blackLamp(),
  Product.whiteChair(),
  Product.woodChair(),
  Product.pinkChair(),
  Product.blackLamp(),
  Product.whiteChair(),
  Product.woodChair(),
];

export const ProductListScreen = ({ navigation, route }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const displayProducts: Product[] = products.filter(product => product.category === route.name);

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('ProductDetails3');
  };

  const onItemCartPress = (index: number): void => {
    navigation && navigation.navigate('ShoppingCart');
  };

  const renderItemFooter = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <View style={styles.itemFooter}>
      <Text category='s1'>
        {info.item.formattedPrice}
      </Text>
      <Button
        style={styles.iconButton}
        size='small'
        accessoryLeft={CartIcon}
        onPress={() => onItemCartPress(info.index)}
      />
    </View>
  );

  const renderItemHeader = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderProductItem = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}>
      <Text category='s1'>
        {info.item.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {info.item.category}
      </Text>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.productList}
      data={displayProducts.length && displayProducts || products}
      numColumns={2}
      renderItem={renderProductItem}
    />
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
