import React from 'react';
import {
  Input,
  InputProps,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';

type InputElement = React.ReactElement<InputProps>;

export const CaptionIconInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      captionIcon={StarIcon}
      {...props}
    />
  );
};
