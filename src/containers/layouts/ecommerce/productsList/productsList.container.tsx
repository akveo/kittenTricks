import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ProductsList } from './productsList.component';
import { Product } from '@src/core/model';
import { products } from '@src/core/data/product';

interface State {
  products: Product[];
}

export class ProductsListContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    products: products,
  };

  private onAddToBucketPress = (product: Product): void => {

  };

  public render(): React.ReactNode {
    return (
      <ProductsList
        products={this.state.products}
        onAddToBucketPress={this.onAddToBucketPress}
      />
    );
  }
}
