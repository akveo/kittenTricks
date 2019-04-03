import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Articles } from './articles.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class ArticlesContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Article List',
      route: 'Article List 1',
    },
    {
      title: 'Layout - V2',
      description: 'Article List',
      route: 'Article List 2',
    },
    {
      title: 'Layout - V3',
      description: 'Article List',
      route: 'Article List 3',
    },
  ];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Articles
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
