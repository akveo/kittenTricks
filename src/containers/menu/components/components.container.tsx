import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Components } from './components.component';
import { ComponentsContainerData } from './type';
import { routes } from './routes';

interface State {
  data: ComponentsContainerData[];
}

export class ComponentsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    data: routes,
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.state.data;

    this.props.navigation.navigate(selectedItem.route);
  };

  public render(): React.ReactNode {
    return (
      <Components
        data={this.state.data}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
