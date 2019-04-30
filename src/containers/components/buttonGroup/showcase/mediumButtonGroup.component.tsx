import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const MediumButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='medium'>
      <Button icon={StarIcon}/>
      <Button icon={StarIcon}/>
    </ButtonGroup>
  );
};
