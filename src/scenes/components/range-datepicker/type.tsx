import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../../../model/showcase.model';
import { StarIcon } from '../../../components/icons';

const now: Date = new Date();

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

const defaultDatepicker: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const iconDatepicker: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    ...defaultDatepicker.props,
    accessoryRight: StarIcon,
  },
};

const labelDatepicker: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    ...defaultDatepicker.props,
    label: 'Date of Birth',
  },
};

const captionDatepicker: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    ...defaultDatepicker.props,
    caption: captionRender,
  },
};

const boundsDatepicker: ComponentShowcaseItem = {
  title: 'Date Bounds',
  props: {
    ...defaultDatepicker.props,
    min: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
    max: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
  },
};

const backdropDatepicker: ComponentShowcaseItem = {
  title: 'Backdrop',
  props: {
    ...defaultDatepicker.props,
    backdropStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultDatepicker,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    iconDatepicker,
    labelDatepicker,
    captionDatepicker,
  ],
};

const settingsSection: ComponentShowcaseSection = {
  title: 'Settings',
  items: [
    boundsDatepicker,
    backdropDatepicker,
  ],
};

export const rangeDatepickerShowcase: ComponentShowcase = {
  title: 'Range Datepicker',
  sections: [
    defaultSection,
    accessoriesSection,
    settingsSection,
  ],
};
