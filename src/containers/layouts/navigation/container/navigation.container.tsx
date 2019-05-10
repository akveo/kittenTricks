import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Navigation } from './navigation.component';
import { routes } from './routes';

interface State {
  selectedLayoutIndex: number;
}

export class NavigationContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedLayoutIndex: 0,
  };

  private data = routes;

  private onCategorySelect = (selectedLayoutIndex: number) => {
    this.setState({ selectedLayoutIndex });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Navigation
        data={this.data}
        selectedLayoutIndex={this.state.selectedLayoutIndex}
        onItemSelect={this.onItemSelect}
        onLayoutSelect={this.onCategorySelect}
      />
    );
  }
}
