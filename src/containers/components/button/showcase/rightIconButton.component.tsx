import React from 'react';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const RightIconButton = (props?: ButtonProps): ButtonElement => {

  return (
    <Button
      style={{ flexDirection: 'row-reverse' }}
      icon={StarIcon}
      {...props}>
      BUTTON
    </Button>
  );
};
