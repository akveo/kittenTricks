import React from 'react';
import { ImageProps, View } from 'react-native';
import { Card, CardElement, CardProps, StyleService, Text, useStyleSheet } from '@ui-kitten/components';

export interface ProfileParameterCardProps extends Omit<CardProps, 'children'> {
  hint: string;
  value: string;
  icon: (props: Partial<ImageProps>) => React.ReactElement<ImageProps>;
}

export const ProfileParameterCard = (props: ProfileParameterCardProps): CardElement => {

  const styles = useStyleSheet(themedStyles);

  const { hint, value, icon, ...restProps } = props;

  return (
    <Card {...restProps}>
      <View style={styles.topContainer}>
        <Text appearance='hint'>
          {hint}
        </Text>
        {icon({ style: styles.icon })}
      </View>
      <Text
        style={styles.valueLabel}
        category='h5'>
        {value}
      </Text>
    </Card>
  );
};

const themedStyles = StyleService.create({
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
