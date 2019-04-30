import React from 'react';
import { TooltipProps } from '@kitten/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const BottomStartTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='bottom start'/>
  );
};
