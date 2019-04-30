import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const OutlineButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='outline'
      {...props}>
      BUTTON
    </Button>
  );
};
