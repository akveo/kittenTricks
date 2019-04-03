import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Ecommerce } from './ecommerce.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class EcommerceContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [];

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
