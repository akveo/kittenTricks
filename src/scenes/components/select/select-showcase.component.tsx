import React from 'react';
import { StyleSheet } from 'react-native';
import { Select, SelectElement, SelectProps } from '@ui-kitten/components';

export const SelectShowcase = (props: SelectProps): SelectElement => {

  const [selectedOption, setSelectedOption] = React.useState(props.children);

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select
      {...props}
      style={styles.select}
      onSelect={onSelect}
    >
      {selectedOption}
    </Select>
  );
};

const styles = StyleSheet.create({
  select: {
    width: 200,
  },
});
