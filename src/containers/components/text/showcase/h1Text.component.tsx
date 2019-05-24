import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

const { width } = Dimensions.get('window');

type TextElement = React.ReactElement<TextProps>;

export const H1Text = (): TextElement => {
  return (
    <Text
      style={[textStyle.headline, styles.text]}
      numberOfLines={1}
      ellipsizeMode='tail'
      category='h1'>
      Sample Text
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: width * 0.55,
  },
});
