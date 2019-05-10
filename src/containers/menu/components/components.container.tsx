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

  private query: string = '';

  private onQueryChange = (query: string) => {
    this.query = query;

    const data: ComponentsContainerData[] = routes.filter(this.fitsQuery);

    this.setState({ data });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.state.data;

    this.props.navigation.navigate(selectedItem.route);
  };

  private fitsQuery = (item: ComponentsContainerData): boolean => {
    const title: string = item.title.toLowerCase();
    const query: string = this.query.toLowerCase();

    return title.includes(query);
  };

  public render(): React.ReactNode {
    return (
      <Components
        data={this.state.data}
        onQueryChange={this.onQueryChange}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
