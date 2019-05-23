import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const PrimaryText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='primary'>
      Sample Text
    </Text>
  );
};
