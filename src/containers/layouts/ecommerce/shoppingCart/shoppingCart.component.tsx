import React from 'react';
import {
  View,
  ListRenderItemInfo,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Button,
} from '@kitten/ui';
import { Text } from '@src/components/common';
import { CartProduct as CartProductModel } from './cartProduct.model';
import {
  CartProduct,
  CartProductProps,
} from '@src/components/ecommerce';

interface ComponentProps {
  products: CartProductModel[];
  onCheckout: () => void;
  onRemoveProductPress: (index: number) => void;
  onAddCopyPress: (index: number) => void;
  onRemoveCopyPress: (index: number) => void;
}

export type ShoppingCartProps = ThemedComponentProps & ComponentProps;

class ShoppingCartComponent extends React.Component<ShoppingCartProps> {

  private currency: string;

  public componentWillMount(): void {
    this.currency = this.props.products[0].currency;
  }

  private calculateTotalPrice = (): number => {
    const { products } = this.props;

    return products
      .reduce((acc: number, item: CartProductModel) => {
        return acc + item.count * item.cost;
      }, 0);
  };

  private onCheckout = (): void => {
    this.props.onCheckout();
  };

  private onRemoveProductPress = (index: number): void => {
    this.props.onRemoveProductPress(index);
  };

  private onAddCopyPress = (index: number) => {
    this.props.onAddCopyPress(index);
  };

  private onRemoveCopyPress = (index: number) => {
    this.props.onRemoveCopyPress(index);
  };

  private renderProduct = (info: ListRenderItemInfo<CartProductModel>): React.ReactElement<CartProductProps> => {
    return (
      <CartProduct
        product={info.item}
        index={info.index}
        onRemoveProduct={this.onRemoveProductPress}
        onAddCopy={this.onAddCopyPress}
        onRemoveCopy={this.onRemoveCopyPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, products } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <View>
          <List
            data={products}
            renderItem={this.renderProduct}
            style={themedStyle.productsList}
          />
          <View style={themedStyle.totalCostContainer}>
            <Text style={themedStyle.totalCostLabel}>Total Cost:</Text>
            <Text style={themedStyle.totalPriceLabel}>
              {`${this.currency} ${this.calculateTotalPrice()}`}
            </Text>
          </View>
        </View>
        <Button
          style={themedStyle.checkoutButton}
          size='giant'
          onPress={this.onCheckout}>CHECKOUT</Button>
      </ScrollView>
    );
  }
}

export const ShoppingCart = withStyles(ShoppingCartComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  productsList: {
    borderTopWidth: 1,
    borderTopColor: theme['color-basic-200'],
  },
  totalCostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['color-basic-200'],
  },
  totalCostLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-extrabold',
    fontSize: 20,
    lineHeight: 28,
  },
  totalPriceLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-bold',
    fontSize: 22,
    lineHeight: 32,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
}));
