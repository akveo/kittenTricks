import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const FilledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='filled'
      {...props}>
      BUTTON
    </Button>
  );
};
