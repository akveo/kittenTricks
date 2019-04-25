import React from 'react';
import {
  Image,
  Alert,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { OverflowMenuShowcase } from './overflowMenuShowcase.component';
import { OverflowMenuItemType } from '@kitten/ui';
import { StyleType } from '@kitten/theme';

const iconUri1: string = 'https://akveo.github.io/eva-icons/fill/png/128/star.png';
const iconUri2: string = 'https://akveo.github.io/eva-icons/fill/png/128/alert-triangle.png';
const iconUri3: string = 'https://akveo.github.io/eva-icons/fill/png/128/book-open.png';
const menuItems: OverflowMenuItemType[] = [
  {
    text: 'Menu Item 1',
    icon: (style: StyleType) => <Image source={{ uri: iconUri1 }} style={style}/>,
  },
  {
    text: 'Menu Item 2',
    icon: (style: StyleType) => <Image source={{ uri: iconUri2 }} style={style}/>,
    disabled: true,
  },
  {
    text: 'Menu Item 3',
  },
  {
    text: 'Menu Item 4',
    icon: (style: StyleType) => <Image source={{ uri: iconUri3 }} style={style}/>,
  },
];

export interface OverflowMenuShowcaseModel {
  menu: OverflowMenuItemType[];
  placement: string;
  visible: boolean;
}

const menus: OverflowMenuShowcaseModel[] = [
  {
    menu: menuItems,
    placement: 'bottom start',
    visible: false,
  },
  {
    menu: menuItems,
    placement: 'bottom end',
    visible: false,
  },
  {
    menu: menuItems,
    placement: 'top start',
    visible: false,
  },
  {
    menu: menuItems,
    placement: 'top end',
    visible: false,
  },
];

interface State {
  menus: OverflowMenuShowcaseModel[];
}

export class OverflowMenuShowcaseContainer extends React.Component<NavigationScreenProps> {

  public state: State = {
    menus: menus,
  };

  private onMenuPress = (index: number): void => {
    const menusCopy: OverflowMenuShowcaseModel[] = this.state.menus;
    menusCopy[index].visible = !menusCopy[index].visible;
    this.setState({ menus: menusCopy });
  };

  private onMenuItemPress = (menuIndex: number, menuItemIndex: number): void => {
    Alert.alert(`Menu: "${this.state.menus[menuIndex].placement}", item: ${menuItemIndex}`);
  };

  public render(): React.ReactNode {
    return (
      <OverflowMenuShowcase
        menus={this.state.menus}
        onMenuPress={this.onMenuPress}
        onMenuItemPress={this.onMenuItemPress}
      />
    );
  }
}
