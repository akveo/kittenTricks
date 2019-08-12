import React from 'react';
import { OverflowMenuProps } from '@kitten/ui';
import { OverflowMenuShowcase } from './overflowMenuShowcase.component';

type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;

export const TopEndOverflowMenu = (): OverflowMenuElement => {
  return (
    <OverflowMenuShowcase placement='top end'/>
  );
};
