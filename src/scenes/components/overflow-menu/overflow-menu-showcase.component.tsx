import React from 'react';
import {
  Button, ButtonElement,
  OverflowMenu,
  OverflowMenuElement,
  OverflowMenuProps,
} from '@ui-kitten/components';

export const OverflowMenuShowcase = (props: OverflowMenuProps): OverflowMenuElement => {

  const [visible, setVisible] = React.useState<boolean>(false);

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
      anchor={renderToggleButton}
      onBackdropPress={toggleMenu}
    />
  );
};
