import React from 'react';
import { ImageProps } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  ModalService,
  StyleType,
} from '@kitten/theme';
import {
  EditIcon,
  LockIcon,
  PersonIcon,
  LayoutIcon,
  SmartphoneIcon,
  CartIcon,
  PinIcon,
  MessageCircleIconOutline,
} from '@src/assets/icons';
import { Layouts } from './layouts.component';
import {
  ComingSoonModal,
} from './comingSoon.modal';

export interface ListItem {
  title: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
  route: string;
}

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private items: ListItem[] = [
    {
      title: 'Auth',
      icon: LockIcon,
      route: 'Auth',
    },
    {
      title: 'Social',
      icon: PersonIcon,
      route: 'Social',
    },
    {
      title: 'Articles',
      icon: EditIcon,
      route: 'Articles',
    },
    {
      title: 'Messaging',
      icon: MessageCircleIconOutline,
      route: 'Messaging',
    },
    {
      title: 'Dashboards',
      icon: LayoutIcon,
      route: 'Dashboards',
    },
    {
      title: 'Walkthrough',
      icon: SmartphoneIcon,
      route: '',
    },
    {
      title: 'Ecommerce',
      icon: CartIcon,
      route: 'Ecommerce',
    },
    {
      title: 'Navigation',
      icon: PinIcon,
      route: '',
    },
  ];

  private comingSoonModalId: string;

  private showComingSoonModal = () => {
    this.comingSoonModalId = ModalService.show(
      <ComingSoonModal
        onCancel={this.hideComingSoonModal}
      />,
      true,
    );
  };

  private hideComingSoonModal = () => {
    ModalService.hide(this.comingSoonModalId);
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.items;

    if (selectedItem.route) {
      this.props.navigation.navigate(selectedItem.route);
      return;
    } else {
      this.showComingSoonModal();
    }
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
