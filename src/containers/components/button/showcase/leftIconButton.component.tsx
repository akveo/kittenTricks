import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const LeftIconButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      icon={StarIcon}
      iconAlignment='left'
      {...props}>
      BUTTON
    </Button>
  );
};
