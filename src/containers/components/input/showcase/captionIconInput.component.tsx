import React from 'react';
import {
  Input,
  InputProps,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';

type InputElement = React.ReactElement<InputProps>;

export const CaptionIconInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      captionIcon={StarIconFill}
      {...props}
    />
  );
};
