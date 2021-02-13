import React from 'react';
import {
  Button,
  Tooltip,
  TooltipElement,
  TooltipProps,
} from '@ui-kitten/components';

export const TooltipShowcase = (props: TooltipProps): TooltipElement => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleTooltip = (): void => {
    setVisible(!visible);
  };

  const renderToggleButton = () => (
    <Button onPress={toggleTooltip}>TOGGLE TOOLTIP</Button>
  );

  return (
    <Tooltip
      {...props}
      visible={visible}
      onBackdropPress={toggleTooltip}
      anchor={renderToggleButton}
    >
      Hi! I am Tooltip!
    </Tooltip>
  );
};
