import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Dashboards } from './dashboards.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class DashboardsContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Trainings 1',
      route: 'Trainings 1',
    },
    {
      title: 'Layout - V2',
      description: 'Trainings 2',
      route: 'Trainings 2',
    },
    {
      title: 'Layout',
      description: 'Movie',
      route: 'Movie',
    },
    {
      title: 'Layout',
      description: 'Book Details',
      route: 'Book Details',
    },
  ];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Dashboards
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
