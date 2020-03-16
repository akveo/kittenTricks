import React from 'react';
import {
  Button,
  ButtonElement,
  IndexPath,
  OverflowMenu,
  OverflowMenuElement,
  OverflowMenuProps,
} from '@ui-kitten/components';

export const OverflowMenuShowcase = (props: OverflowMenuProps): OverflowMenuElement => {

  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const toggleMenu = (): void => {
    setVisible(!visible);
  };

  const renderToggleButton = (): ButtonElement => (
    <Button onPress={toggleMenu}>
      TOGGLE MENU
    </Button>
  );

  return (
    <OverflowMenu
      {...props}
      visible={visible}
      selectedIndex={selectedIndex}
      anchor={renderToggleButton}
      onSelect={onSelect}
      onBackdropPress={toggleMenu}
    />
  );
};
