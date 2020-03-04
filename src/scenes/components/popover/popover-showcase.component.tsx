import React from 'react';
import {
  Button,
  Popover,
  PopoverElement,
  PopoverProps,
  Text,
  TextElement,
} from '@ui-kitten/components';

export const PopoverShowcase = (props: PopoverProps): PopoverElement => {

  const [visible, setVisible] = React.useState<boolean>(false);

  const togglePopover = (): void => {
    setVisible(!visible);
  };

  const renderToggleButton = (): TextElement => {
    return (
      <Button onPress={togglePopover}>
        TOGGLE POPOVER
      </Button>
    );
  };

  return (
    <Popover
      {...props}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={togglePopover}>
      <Text>
        Hi! I'm Popover!
      </Text>
    </Popover>
  );
};
