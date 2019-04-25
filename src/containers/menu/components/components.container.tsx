import React from 'react';
import { Alert } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Components } from './components.component';
import {
  AvatarShowcase,
  ButtonGroupShowcase,
  ButtonShowcase,
  CheckBoxShowcase,
  ComplexComponentShowcase,
  InputShowcase,
  RadioShowcase,
  TextShowcase,
  ToggleShowcase,
} from './components.showcase';

export interface ListItem {
  title: string;
  view: () => React.ReactElement<any>;
  route?: string;
  action?: () => void;
}

const COMPONENTS: ListItem[] = [
  {
    title: 'Button',
    view: ButtonShowcase,
    route: 'Button',
  },
  {
    title: 'Button Group',
    view: ButtonGroupShowcase,
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    view: CheckBoxShowcase,
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    view: ToggleShowcase,
    route: 'Toggle',
  },
  {
    title: 'Radio',
    view: RadioShowcase,
    route: 'Radio',
  },
  {
    title: 'Input',
    view: InputShowcase,
    route: 'Input',
  },
  {
    title: 'Avatar',
    view: AvatarShowcase,
    route: 'Avatar',
  },
  {
    title: 'Text',
    view: TextShowcase,
    route: 'Text',
  },
  {
    title: 'Top Navigation',
    view: ComplexComponentShowcase,
    action: () => Alert.alert('This component you can check in other sections of application'),
  },
  {
    title: 'Bottom Navigation',
    view: ComplexComponentShowcase,
    action: () => Alert.alert('This component you can check in other sections of application'),
  },
  {
    title: 'Tab View',
    view: ComplexComponentShowcase,
    route: 'Tab View',
  },
  {
    title: 'Popover',
    view: ComplexComponentShowcase,
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    view: ComplexComponentShowcase,
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    view: ComplexComponentShowcase,
    route: 'Overflow Menu',
  },
  {
    title: 'List',
    view: ComplexComponentShowcase,
    route: 'List',
  },
];

interface State {
  items: ListItem[];
}

export class ComponentsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    items: COMPONENTS,
  };

  private query: string = '';

  private onQueryChange = (query: string) => {
    this.query = query;

    const items: ListItem[] = COMPONENTS.filter(this.fitsQuery);

    this.setState({ items });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.state.items;

    if (selectedItem.route) {
      this.props.navigation.navigate(selectedItem.route);
    } else {
      selectedItem.action();
    }
  };

  private fitsQuery = (item: ListItem): boolean => {
    const title: string = item.title.toLowerCase();
    const query: string = this.query.toLowerCase();

    return title.includes(query);
  };

  public render(): React.ReactNode {
    return (
      <Components
        items={this.state.items}
        onQueryChange={this.onQueryChange}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
