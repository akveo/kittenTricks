import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Product } from '@src/core/model';
import { products } from '@src/core/data/product';
import { ProductsList } from './productsList.component';

interface State {
  products: Product[];
}

export class ProductsListContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    products: products,
  };

  private onProductPress = (product: Product) => {

  };

  private onProductAddPress = (product: Product) => {

  };

  public render(): React.ReactNode {
    return (
      <ProductsList
        products={this.state.products}
        onProductPress={this.onProductPress}
        onProductAddPress={this.onProductAddPress}
      />
    );
  }
}
