import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const WarningText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='warning'>
      Sample Text
    </Text>
  );
};
