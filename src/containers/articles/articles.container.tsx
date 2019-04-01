import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import {
  ArrowIcon,
  ListIcon,
} from '@src/assets/icons';
import { ArticlesComponent } from './articles.component';

export class ArticlesContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Article List 1',
      description: 'Article List 1',
      icon: ListIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Article List 2',
      description: 'Article List 2',
      icon: ListIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Article List 3',
      description: 'Article List 3',
      icon: ListIcon,
      accessory: ArrowIcon,
    },
  ];

  private onCategorySelect = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <ArticlesComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}
