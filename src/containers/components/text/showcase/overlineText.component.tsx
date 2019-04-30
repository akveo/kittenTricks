import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const OverlineText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      category='overline'>
      Text
    </Text>
  );
};
