import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DisabledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      disabled={true}
      {...props}>
      BUTTON
    </Button>
  );
};
