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

export const H2Text = (): TextElement => {
  return (
    <Text
      style={[textStyle.headline, styles.text]}
      category='h2'>
      Sample Text
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: width * 0.55,
  },
});
