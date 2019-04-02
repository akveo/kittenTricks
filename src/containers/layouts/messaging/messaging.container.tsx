import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Messaging } from './messaging.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class MessagingContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Messaging
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
