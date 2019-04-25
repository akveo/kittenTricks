import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { TooltipShowcase } from './tooltipShowcase.component';
import { PopoverShowcaseModel } from '../popover/popoverShowcase.container';

interface State {
  tooltips: PopoverShowcaseModel[];
}

const tooltips: PopoverShowcaseModel[] = [
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

export class TooltipShowcaseContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    tooltips: tooltips,
  };

  private onPopoverShowcasePress = (index: number): void => {
    const tooltipsCopy: PopoverShowcaseModel[] = this.state.tooltips;
    tooltipsCopy[index].visible = !tooltipsCopy[index].visible;
    this.setState({ tooltips: tooltipsCopy });
  };

  public render(): React.ReactNode {
    return (
      <TooltipShowcase
        tooltips={this.state.tooltips}
        onTooltipShowcase={this.onPopoverShowcasePress}
      />
    );
  }
}
