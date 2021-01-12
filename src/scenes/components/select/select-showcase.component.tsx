import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Select,
  SelectElement,
  SelectProps,
  SelectItem,
  SelectGroup,
} from '@ui-kitten/components';
import { SelectOptionType } from './type';

interface SelectCustomProps extends SelectProps {
  data: SelectOptionType[];
  multiSelect?: boolean;
  groupedOptions?: boolean;
}

export const SelectShowcase = (props: SelectCustomProps): SelectElement => {
  const [selectedIndex, setSelectedIndex] = useState<any>(null);

  const renderOption = (item, index) => (
    <SelectItem title={item.title} key={index} />
  );

  const renderGroup = (item, index) => (
    <SelectGroup title={item.title} key={index}>
      {item.items.map(renderOption)}
    </SelectGroup>
  );

  const multipleValues =
    selectedIndex && selectedIndex instanceof Array
      ? selectedIndex
          .map((index) => {
            return props.data[index.section]?.items[index.row].title;
          })
          .join(', ')
      : null;

  const displayValue = () =>
    props.groupedOptions && props.multiSelect
      ? multipleValues
      : !props.multiSelect
      ? props.data[selectedIndex.row].title
      : null;

  return (
    <>
      <Select
        {...props}
        value={selectedIndex && displayValue()}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.select}
      >
        {props.groupedOptions
          ? props.data.map(renderGroup)
          : props.data.map(renderOption)}
      </Select>
    </>
  );
};

const styles = StyleSheet.create({
  select: {
    width: 200,
  },
});
