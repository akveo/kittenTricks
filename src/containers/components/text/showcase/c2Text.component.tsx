import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const C2Text = (): TextElement => {
  return (
    <Text
      style={textStyle.caption2}
      category='c2'>
      Sample Text
    </Text>
  );
};
