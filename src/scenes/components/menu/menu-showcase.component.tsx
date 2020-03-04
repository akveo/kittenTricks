import React from 'react';
import { IndexPath, Menu, MenuElement, MenuProps } from '@ui-kitten/components';

export const MenuShowcase = (props: MenuProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(props.selectedIndex);

  return (
    <Menu
      {...props}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
    />
  );
};
