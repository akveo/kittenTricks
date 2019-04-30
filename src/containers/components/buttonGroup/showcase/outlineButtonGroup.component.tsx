import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const OutlineButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup appearance='outline'>
      <Button icon={StarIcon}/>
      <Button icon={StarIcon}/>
    </ButtonGroup>
  );
};
