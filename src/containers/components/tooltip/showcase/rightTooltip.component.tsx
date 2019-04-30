import React from 'react';
import { TooltipProps } from '@kitten/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const RightTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='right'/>
  );
};
