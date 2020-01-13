import React from 'react';
import { Menu, MenuElement, MenuProps } from '@ui-kitten/components';

export const MenuShowcase = (props: MenuProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <Menu
      {...props}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    />
  );
};
