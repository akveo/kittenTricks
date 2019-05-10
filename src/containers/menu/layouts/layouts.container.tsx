import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ModalService } from '@kitten/theme';
import { Layouts } from './layouts.component';
import { ComingSoonModal } from './comingSoon.modal';
import { LayoutsContainerData } from './type';
import { routes } from './routes';

export class LayoutsContainer extends React.Component<NavigationScreenProps> {

  private data: LayoutsContainerData[] = routes;

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
    const { [index]: selectedItem } = this.data;

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
        data={this.data}
        onItemSelect={this.onItemSelect}
      />
    );
  }
}
