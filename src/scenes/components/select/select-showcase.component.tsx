import React from 'react';
import { IndexPath, Select, SelectProps } from '@ui-kitten/components';

export const SelectShowcase = (props: SelectProps): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>();

  return (
    <Select
      {...props}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
    />
  );
};
