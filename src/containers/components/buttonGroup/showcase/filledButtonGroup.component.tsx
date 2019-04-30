import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const FilledButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup appearance='filled'>
      <Button icon={StarIcon}/>
      <Button icon={StarIcon}/>
    </ButtonGroup>
  );
};
