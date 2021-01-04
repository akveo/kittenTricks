import React from 'react';
import {
  Button,
  ButtonElement,
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

  const renderPopoverContent = (): TextElement => {
    return <Text>Hi! I'm Popover!</Text>;
  };

  const renderToggleButton = (): ButtonElement => (
    <Button onPress={togglePopover}>TOGGLE POPOVER</Button>
  );

  return (
    <Popover
      {...props}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={togglePopover}
    >
      {renderPopoverContent()}
    </Popover>
  );
};
