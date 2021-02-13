import React from 'react';
import { IndexPath, Menu, MenuElement, MenuItem, MenuGroup } from '@ui-kitten/components';
import { MenuShowcaseProps } from './type';

export const MenuShowcase = (props: MenuShowcaseProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index.row);
  };

  const renderData: MenuElement[] = props.data.map((el, index) => (
    el.subItems ? (
      <MenuGroup key={index}>
        {el.subItems.map((el, index) => (
          <MenuItem key={index} {...el} />
        ))}
      </MenuGroup>
    ) : <MenuItem key={index} {...el} />
  ));

  return (
    <Menu
      {...props}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    >
      {renderData}
    </Menu>
  );
};
