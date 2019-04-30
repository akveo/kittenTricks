import React from 'react';
import { TooltipProps } from '@kitten/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const TopEndTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='top end'/>
  );
};
