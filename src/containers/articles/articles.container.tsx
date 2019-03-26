import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ArticlesComponent } from './articles.component';

export class ArticlesContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <ArticlesComponent/>
    );
  }
}
