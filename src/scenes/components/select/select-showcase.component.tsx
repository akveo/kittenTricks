import React from 'react';
import { IndexPath, Select, SelectProps } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const SelectShowcase = (props: SelectProps): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>();

  return (
    <Select
      {...props}
      style={[props.style, styles.select]}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
    />
  );
};

const styles = StyleSheet.create({
  select: {
    width: 192,
  },
});
