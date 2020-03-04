import React from 'react';
import { Button, TextElement, Tooltip, TooltipElement, TooltipProps } from '@ui-kitten/components';

export const TooltipShowcase = (props: TooltipProps): TooltipElement => {

  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleTooltip = (): void => {
    setVisible(!visible);
  };

  const renderToggleButton = (): TextElement => {
    return (
      <Button onPress={toggleTooltip}>
        TOGGLE TOOLTIP
      </Button>
    );
  };

  return (
    <Tooltip
      {...props}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={toggleTooltip}>
      Hi! I'm a Tooltip
    </Tooltip>
  );
};
