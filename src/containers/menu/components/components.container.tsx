import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Components } from './components.component';
import { ComponentsContainerData } from './type';
import { routes } from './routes';

interface State {
  data: ComponentsContainerData[];
}

export class ComponentsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    data: routes,
  };

  private navigationKey: string = 'ComponentsContainer';

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.state.data;

    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: selectedItem.route,
    });
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
