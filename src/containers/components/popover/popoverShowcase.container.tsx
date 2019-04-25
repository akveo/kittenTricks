import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { PopoverShowcase } from './popoverShowcase.component';

export interface PopoverShowcaseModel {
  placement: string;
  visible: boolean;
}

interface State {
  popovers: PopoverShowcaseModel[];
}

const popovers: PopoverShowcaseModel[] = [
  {
    placement: 'right',
    visible: false,
  },
  {
    placement: 'right start',
    visible: false,
  },
  {
    placement: 'right end',
    visible: false,
  },
  {
    placement: 'left',
    visible: false,
  },
  {
    placement: 'left start',
    visible: false,
  },
  {
    placement: 'left end',
    visible: false,
  },
  {
    placement: 'top',
    visible: false,
  },
  {
    placement: 'top start',
    visible: false,
  },
  {
    placement: 'top end',
    visible: false,
  },
  {
    placement: 'bottom',
    visible: false,
  },
  {
    placement: 'bottom start',
    visible: false,
  },
  {
    placement: 'bottom end',
    visible: false,
  },
];

export class PopoverShowcaseContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    popovers: popovers,
  };

  private onPopoverShowcasePress = (index: number): void => {
    const popoversCopy: PopoverShowcaseModel[] = this.state.popovers;
    popoversCopy[index].visible = !popoversCopy[index].visible;
    this.setState({ popovers: popoversCopy });
  };

  public render(): React.ReactNode {
    return (
      <PopoverShowcase
        popovers={this.state.popovers}
        onPopoverShowcase={this.onPopoverShowcasePress}
      />
    );
  }
}
