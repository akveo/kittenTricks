import React from 'react';
import { PopoverProps } from '@kitten/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const BottomStartPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='bottom start'/>
  );
};
