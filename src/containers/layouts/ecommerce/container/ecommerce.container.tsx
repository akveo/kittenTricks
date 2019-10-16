import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Ecommerce } from './ecommerce.component';
import { routes } from './routes';

interface State {
  selectedLayoutIndex: number;
}

export class EcommerceContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    selectedLayoutIndex: 0,
  };

  private data = routes;
  private navigationKey: string = 'EcommerceContainer';

  private onCategorySelect = (selectedLayoutIndex: number) => {
    this.setState({ selectedLayoutIndex });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: selectedItem.route,
    });
  };

  public render(): React.ReactNode {
    return (
      <Ecommerce
        data={this.data}
        selectedLayoutIndex={this.state.selectedLayoutIndex}
        onItemSelect={this.onItemSelect}
        onLayoutSelect={this.onCategorySelect}
      />
    );
  }
}
