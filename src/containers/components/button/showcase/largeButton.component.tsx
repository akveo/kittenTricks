import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const LargeButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='large'
      {...props}>
      BUTTON
    </Button>
  );
};
