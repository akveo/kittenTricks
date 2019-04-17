import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Product } from '@src/core/model';
import { ShoppingCart } from './shoppingCart.component';
import { products } from '@src/core/data/product';
import { CartProduct } from '@src/containers/layouts/ecommerce/shoppingCart/cartProduct.model';

interface State {
  cartProducts: CartProduct[];
}

export class ShoppingCartContainer extends React.Component<NavigationScreenProps, State> {

  private prepareProducts = (): CartProduct[] => {
    return [products[0], products[1]]
      .map((item: Product) => {
        return {
          ...item,
          count: 1,
        };
      });
  };

  public state: State = {
    cartProducts: this.prepareProducts(),
  };

  private onCheckoutPress = (): void => {

  };

  private onRemoveProductPress = (index: number): void => {
    const { cartProducts } = this.state;
    const removeIndex: number = cartProducts.indexOf(cartProducts[index]);

    if (removeIndex > -1) {
      const updatedProducts: CartProduct[] = cartProducts;
      updatedProducts.splice(removeIndex, 1);
      this.setState({ cartProducts: updatedProducts });
    }
  };

  private onAddCopyPress = (index: number): void => {
    const copyProducts: CartProduct[] = this.state.cartProducts;
    copyProducts[index].count++;
    this.setState({ cartProducts: copyProducts });
  };

  private onRemoveCopyPress = (index: number): void => {
    const copyProducts: CartProduct[] = this.state.cartProducts;
    if (copyProducts[index].count > 0) {
      copyProducts[index].count--;
      this.setState({ cartProducts: copyProducts });
    }
  };

  public render(): React.ReactNode {
    return (
      <ShoppingCart
        products={this.state.cartProducts}
        onCheckout={this.onCheckoutPress}
        onRemoveProductPress={this.onRemoveProductPress}
        onAddCopyPress={this.onAddCopyPress}
        onRemoveCopyPress={this.onRemoveCopyPress}
      />
    );
  }
}
