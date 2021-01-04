import React from 'react';
import { IndexPath, Menu, MenuElement, MenuProps } from '@ui-kitten/components';

export const MenuShowcase = (props: MenuProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index.row);
  };

  return (
    <Menu
      {...props}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    />
  );
};
