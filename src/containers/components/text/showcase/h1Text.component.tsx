import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const H1Text = (): TextElement => {
  return (
    <Text
      style={textStyle.headline}
      category='h1'>
      Text
    </Text>
  );
};
