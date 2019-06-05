import React from 'react';
import { TooltipProps } from '@kitten/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

// todo: fix in react-native-ui-kitten
interface IndicatorOffsetProps {
  indicatorOffset?: number;
}

export const BottomEndTooltip = (indicatorOffsetProps?: IndicatorOffsetProps): TooltipElement => {
  return (
    <TooltipShowcase {...indicatorOffsetProps} placement='bottom end'/>
  );
};
