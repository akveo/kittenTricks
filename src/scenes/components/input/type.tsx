import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';
import { StarIcon } from '../../../components/icons';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  }
});

const captionRender = () => {
  return (
    <View style={styles.captionContainer}>
      {StarIcon(styles.captionIcon)}
      <Text style={styles.captionText}>Place your text</Text>
    </View>
  )
}

const defaultInput: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const disabledInput: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const iconInput: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    accessoryRight: StarIcon,
  },
};

const labelInput: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    label: 'Place your text',
  },
};

const captionInput: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    caption: captionRender,
  },
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    defaultInput,
    disabledInput,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    iconInput,
    labelInput,
    captionInput,
  ],
};

export const inputShowcase: ComponentShowcase = {
  title: 'Input',
  sections: [
    stateSection,
    accessoriesSection,
  ],
};

export const inputSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'status',
    value: 'primary',
  },
  {
    propertyName: 'status',
    value: 'success',
  },
  {
    propertyName: 'status',
    value: 'info',
  },
  {
    propertyName: 'status',
    value: 'warning',
  },
  {
    propertyName: 'status',
    value: 'danger',
  },
  {
    propertyName: 'status',
    value: 'basic',
  },
  {
    propertyName: 'status',
    value: 'control',
  },
  {
    propertyName: 'size',
    value: 'small',
  },
  {
    propertyName: 'size',
    value: 'medium',
  },
  {
    propertyName: 'size',
    value: 'large',
  },
];
