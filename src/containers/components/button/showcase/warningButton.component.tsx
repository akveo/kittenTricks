import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const WarningButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='warning'
      {...props}>
      BUTTON
    </Button>
  );
};
