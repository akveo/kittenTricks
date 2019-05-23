import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const P1Text = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      category='p1'>
      Sample Text
    </Text>
  );
};
