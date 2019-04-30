import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const WhiteButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='white'
      {...props}>
      BUTTON
    </Button>
  );
};
