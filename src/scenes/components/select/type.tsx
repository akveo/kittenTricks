import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';
import { StarIcon } from '../../../components/icons';
import { IndexPath } from '@ui-kitten/components';

export interface SelectOptionType {
  title: string;
  items?: { title: string }[];
}

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
  }
});

const captionRender = ({ style }) => {
  return (
    <View style={styles.captionContainer}>
      {StarIcon(styles.captionIcon)}
      <Text style={style}>Place your text</Text>
    </View>
  )
}

const defaultOptions: SelectOptionType[] = [
  { title: 'Option 1' },
  { title: 'Option 2' },
  { title: 'Option 3' },
  { title: 'Option 4' },
  { title: 'Option 5' },
  { title: 'Option 6' },
  { title: 'Option 7' },
  { title: 'Option 8' },
];

const groupedOptions: SelectOptionType[] = [
  {
    title: 'Group 1',
    items: [{ title: 'Option 1' }, { title: 'Option 2' }],
  },
  {
    title: 'Group 2',
    items: [{ title: 'Option 1' }, { title: 'Option 2' }],
  },
];

const defaultSelect: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    data: defaultOptions,
  },
};

const disabledSelect: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    ...defaultSelect.props,
    disabled: true,
  },
};

const initialValueSelect: ComponentShowcaseItem = {
  title: 'Initial Value',
  props: {
    ...defaultSelect.props,
    selectedIndex: new IndexPath(0),
  },
};

const multiSelect: ComponentShowcaseItem = {
  title: 'Multiselect',
  props: {
    ...defaultSelect.props,
    multiSelect: true,
  },
};

const multiSelectInitialValue: ComponentShowcaseItem = {
  title: 'Initial Value',
  props: {
    ...multiSelect.props,
    selectedIndex: [new IndexPath(0), new IndexPath(1)],
  },
};

const groupSelect: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    ...defaultSelect.props,
    data: groupedOptions,
    groupedOptions: true,
  },
};

const groupMultiselect: ComponentShowcaseItem = {
  title: 'Multiselect',
  props: {
    ...groupSelect.props,
    multiSelect: true,
  },
};

const withIconSelect: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    ...defaultSelect.props,
    accessoryRight: StarIcon,
  },
};

const withLabelSelect: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    ...defaultSelect.props,
    label: 'LABEL',
  },
};

const placeholderSelect: ComponentShowcaseItem = {
  title: 'Placeholder',
  props: {
    ...defaultSelect.props,
    placeholder: 'Place your Text',
  },
};

const captionSelect: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    ...defaultSelect.props,
    caption: captionRender,
  }
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [defaultSelect, disabledSelect, initialValueSelect],
};

const multiSelectSection: ComponentShowcaseSection = {
  title: 'Multiselect',
  items: [multiSelect, multiSelectInitialValue],
};

const groupsSection: ComponentShowcaseSection = {
  title: 'Groups',
  items: [groupSelect, groupMultiselect],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [withIconSelect, withLabelSelect, placeholderSelect, captionSelect],
};

export const selectShowcase: ComponentShowcase = {
  title: 'Select',
  sections: [
    defaultSection,
    multiSelectSection,
    groupsSection,
    accessoriesSection,
  ],
};

export const selectSettings: ComponentShowcaseSetting[] = [
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
