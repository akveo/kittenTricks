import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Layouts } from './layouts.component';
import { LayoutsContainerData } from './type';
import { routes } from './routes';
import { navigateAction } from '@src/core/navigation';

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private data: LayoutsContainerData[] = routes;

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.dispatch(navigateAction(selectedItem.route));
  };

  public render(): React.ReactNode {
    return (
      <Layouts
        data={this.data}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
