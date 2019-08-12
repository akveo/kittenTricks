import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const H4Text = (): TextElement => {
  return (
    <Text
      style={textStyle.headline}
      category='h4'>
      Sample Text
    </Text>
  );
};
