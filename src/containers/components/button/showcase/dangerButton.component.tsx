import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DangerButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='danger'
      {...props}>
      BUTTON
    </Button>
  );
};
