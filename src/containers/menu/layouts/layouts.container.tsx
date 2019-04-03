import React from 'react';
import { ImageProps } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { StyleType } from '@kitten/theme';
import {
  EditIcon,
  LockIcon,
  MessageIcon,
  PersonIcon,
  LayoutIcon,
  SmartphoneIcon,
  CartIcon,
  PinIcon,
} from '@src/assets/icons';
import { Layouts } from './layouts.component';

export interface ListItem {
  title: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private items: ListItem[] = [
    {
      title: 'Auth',
      icon: LockIcon,
    },
    {
      title: 'Social',
      icon: PersonIcon,
    },
    {
      title: 'Articles',
      icon: EditIcon,
    },
    {
      title: 'Messaging',
      icon: MessageIcon,
    },
    {
      title: 'Dashboards',
      icon: LayoutIcon,
    },
    {
      title: 'Walkthrough',
      icon: SmartphoneIcon,
    },
    {
      title: 'Ecommerce',
      icon: CartIcon,
    },
    {
      title: 'Navigation',
      icon: PinIcon,
    },
  ];

  private onItemSelect = (index: number) => {
    const { navigation } = this.props;

    const route: string = this.items[index].title;

    navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <Layouts
        items={this.items}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
