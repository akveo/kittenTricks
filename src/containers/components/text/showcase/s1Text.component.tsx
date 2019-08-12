import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const S1Text = (): TextElement => {
  return (
    <Text
      style={textStyle.subtitle}
      category='s1'>
      Sample Text
    </Text>
  );
};
