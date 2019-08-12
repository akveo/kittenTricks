import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const H5Text = (): TextElement => {
  return (
    <Text
      style={textStyle.headline}
      category='h5'>
      Sample Text
    </Text>
  );
};
