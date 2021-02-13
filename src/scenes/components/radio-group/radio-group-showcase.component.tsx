import React from 'react';
import {
  Radio,
  RadioGroup,
  RadioGroupElement,
  RadioGroupProps,
  Text,
} from '@ui-kitten/components';

export const RadioGroupShowcase = (
  props: RadioGroupProps
): RadioGroupElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <RadioGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      {options.map((el, index) => (
        <Radio key={index}>
          {(evaProps) => <Text {...evaProps}>{el}</Text>}
        </Radio>
      ))}
    </RadioGroup>
  );
};
