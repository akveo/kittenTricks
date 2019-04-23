import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Ecommerce } from './ecommerce.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class EcommerceContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Add New Card',
      route: 'Add New Card',
    },
    {
      title: 'Layout',
      description: 'Payment',
      route: 'Payment',
    },
    {
      title: 'Layout',
      description: 'Products List',
      route: 'Products List',
    },
    {
      title: 'Layout',
      description: 'Product Details',
      route: 'Product Details',
    },
    {
      title: 'Layout',
      description: 'Shopping Cart',
      route: 'Shopping Cart',
    },
    {
      title: 'Layout',
      description: 'Rent Apartment',
      route: 'Rent Apartment',
    },
    {
      title: 'Layout',
      description: 'Book Details',
      route: 'Book Details',
    },
    {
      title: 'Layout',
      description: 'Movie Details',
      route: 'Movie Details',
    },
  ];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Ecommerce
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
