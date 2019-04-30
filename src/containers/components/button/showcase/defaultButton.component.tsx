import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DefaultButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button {...props}>
      BUTTON
    </Button>
  );
};
