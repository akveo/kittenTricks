import React from 'react';
import { PopoverProps } from '@kitten/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const RightEndPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='right end'/>
  );
};
