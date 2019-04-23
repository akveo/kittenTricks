import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Messaging } from './messaging.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class MessagingContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Conversations List',
      route: 'Conversations List',
    },
    {
      title: 'Layout',
      description: 'Chat - V1',
      route: 'Chat 1',
    },
    {
      title: 'Layout',
      description: 'Chat - V2',
      route: 'Chat 2',
    },
    {
      title: 'Layout',
      description: 'Chat - V3',
      route: 'Chat 3',
    },
  ];

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
