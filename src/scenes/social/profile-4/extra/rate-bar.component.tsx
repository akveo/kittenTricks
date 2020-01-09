import React from 'react';
import { ImageStyle, View, ViewProps } from 'react-native';
import { Button, ButtonElement, Icon, IconElement, Text, useStyleSheet } from '@ui-kitten/components';

export interface RateBarProps extends ViewProps {
  hint: string;
  value: number;
  onValueChange: (value: number) => void;
}

export const StarIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='star'/>
);

export const RateBar = (props: RateBarProps): React.ReactElement<ViewProps> => {

  const styles = StyleSheet.create();

  const renderRateButtonElement = (value: number): ButtonElement => {
    const status: string = value <= props.value ? 'warning' : 'basic';

    return (
      <Button
        key={value}
        style={styles.iconButton}
        appearance='ghost'
        size='tiny'
        status={status}
        icon={StarIcon}
        onPress={() => props.onValueChange(value)}
      />
    );
  };

  const { hint, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[styles.container, restProps.style]}>
      <Text
        style={styles.hint}
        appearance='hint'>
        {hint}
      </Text>
      {[1, 2, 3, 4, 5].map(renderRateButtonElement)}
    </View>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hint: {
    marginRight: 8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
