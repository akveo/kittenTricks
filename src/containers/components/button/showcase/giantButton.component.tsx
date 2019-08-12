import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const GiantButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='giant'
      {...props}>
      BUTTON
    </Button>
  );
};
