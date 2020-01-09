import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Divider, Text } from '@ui-kitten/components';

interface SectionProps extends TouchableOpacityProps {
  hint: string;
  children?: React.ReactNode;
}

export const Setting = (props: SectionProps): React.ReactElement<TouchableOpacityProps> => {

  const { style, hint, children, ...touchableOpacityProps } = props;

  return (
    <React.Fragment>
      <TouchableOpacity
        activeOpacity={1.0}
        {...touchableOpacityProps}
        style={[styles.container, style]}>
        <Text
          category='s2'>
          {hint}
        </Text>
        {children}
      </TouchableOpacity>
      <Divider/>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
