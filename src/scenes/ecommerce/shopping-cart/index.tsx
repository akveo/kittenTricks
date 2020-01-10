import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Button, Layout, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { CartItem } from './extra/cart-item.component';
import { ArrowIosBackIcon, SearchIcon, ShoppingCartIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Product } from './extra/data';

const initialProducts: Product[] = [
  Product.pinkChair(),
  Product.blackLamp(),
];

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [products, setProducts] = React.useState<Product[]>(initialProducts);

  const totalCost = (): number => {
    return products.reduce((acc: number, product: Product): number => acc + product.totalPrice, 0);
  };

  const onSearchActionPress = (): void => {
    navigation && navigation.navigate('ProductList');
  };

  const onCartActionPress = (): void => {

  };

  const onItemRemove = (product: Product, index: number): void => {
    products.splice(index, 1);
    setProducts([...products]);
  };

  const onItemChange = (product: Product, index: number): void => {
    products[index] = product;
    setProducts([...products]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderSearchAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={SearchIcon}
      onPress={onSearchActionPress}
    />
  );

  const renderCartAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ShoppingCartIcon}
      onPress={onCartActionPress}
    />
  );

  const renderFooter = (): React.ReactElement => (
    <Layout style={styles.footer}>
      <Text category='h5'>Total Cost:</Text>
      <Text category='h5'>{`$${totalCost()}`}</Text>
    </Layout>
  );

  const renderProductItem = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
      onProductChange={onItemChange}
      onRemove={onItemRemove}
    />
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Shopping Cart'
        leftControl={renderBackAction()}
        rightControls={[renderSearchAction(), renderCartAction()]}
      />
      <List
        data={products}
        renderItem={renderProductItem}
        ListFooterComponent={renderFooter}
      />
      <Button
        style={styles.checkoutButton}
        size='giant'>
        CHECKOUT
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 0.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});

