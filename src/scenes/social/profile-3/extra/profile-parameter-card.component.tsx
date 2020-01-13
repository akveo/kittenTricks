import React from 'react';
import { ImageProps, View } from 'react-native';
import { Card, CardElement, CardProps, StyleType, Text, useStyleSheet } from '@ui-kitten/components';

export interface ProfileParameterCardProps extends Omit<CardProps, 'children'> {
  hint: string;
  value: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}

export const ProfileParameterCard = (props: ProfileParameterCardProps): CardElement => {

  const styles = StyleSheet.create();

  const { hint, value, icon, ...restProps } = props;

  return (
    <Card {...restProps}>
      <View style={styles.topContainer}>
        <Text appearance='hint'>
          {hint}
        </Text>
        {icon(styles.icon)}
      </View>
      <Text
        style={styles.valueLabel}
        category='h5'>
        {value}
      </Text>
    </Card>
  );
};

const StyleSheet = useStyleSheet({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueLabel: {
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'color-primary-default',
  },
});
