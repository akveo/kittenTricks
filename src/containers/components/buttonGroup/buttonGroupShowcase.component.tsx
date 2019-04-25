import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

export const ButtonGroupShowcase = (props?: ButtonGroupProps): React.ReactElement<ButtonGroupProps> => {
  return (
    <ButtonGroup {...props}>
      <Button icon={StarIcon}/>
      <Button icon={StarIcon}/>
    </ButtonGroup>
  );
};
