import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItem } from '@src/components/common';
import { Social } from './social.component';

interface RouteListItem extends ListItem {
  route: string;
}

export class SocialContainer extends React.Component<NavigationScreenProps> {

  private items: RouteListItem[] = [
    {
      title: 'Layout',
      description: 'Profile Settings',
      route: 'Profile Settings 1',
    },
    {
      title: 'Layout - V2',
      description: 'Profile Settings',
      route: 'Profile Settings 2',
    },
    {
      title: 'Layout - V3',
      description: 'Profile Settings',
      route: 'Profile Settings 3',
    },
  ];

  private onItemSelect = (index: number): void => {
    const { [index]: selectedItem } = this.items;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Social
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
