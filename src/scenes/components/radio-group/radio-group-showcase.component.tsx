import React from 'react';
import { Radio, RadioGroup, RadioGroupElement, RadioGroupProps } from '@ui-kitten/components';

export const RadioGroupShowcase = (props: RadioGroupProps): RadioGroupElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

  return (
    <RadioGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}>
      <Radio>Option 1</Radio>
      <Radio>Option 2</Radio>
      <Radio>Option 3</Radio>
    </RadioGroup>
  );
};
