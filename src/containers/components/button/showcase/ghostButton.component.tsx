import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const GhostButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='ghost'
      {...props}>
      BUTTON
    </Button>
  );
};
