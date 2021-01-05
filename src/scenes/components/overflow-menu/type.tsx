import { ImageStyle } from 'react-native';
import { IconElement, OverflowMenuProps } from '@ui-kitten/components';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

export interface OverflowMenuItemType {
  title: string;
  accessoryLeft?: (style: ImageStyle) => IconElement;
  disabled?: boolean;
}

export interface OverflowMenuPropsCustom extends OverflowMenuProps {
  data: OverflowMenuItemType[];
}

const defaultMenuItems: OverflowMenuItemType[] = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
];

const withIconMenuItems: OverflowMenuItemType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withDisabledItemMenuItems: OverflowMenuItemType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
    disabled: true,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const defaultOverflowMenu: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    data: defaultMenuItems,
  },
};

const withIcons: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    data: withIconMenuItems,
  },
};

const withDisabledItem: ComponentShowcaseItem = {
  title: 'Disabled items',
  props: {
    data: withDisabledItemMenuItems,
  },
};

const styledBackdropOverflowMenu: ComponentShowcaseItem = {
  title: 'Styled backdrop',
  props: {
    data: withIconMenuItems,
    backdropStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultOverflowMenu,
    withDisabledItem,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    withIcons,
  ],
};

const backdropSection: ComponentShowcaseSection = {
  title: 'Backdrop',
  items: [
    styledBackdropOverflowMenu,
  ],
};

export const overflowMenuShowcase: ComponentShowcase = {
  title: 'Overflow Menu',
  sections: [
    defaultSection,
    accessoriesSection,
    backdropSection,
  ],
};

export const overflowMenuSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'default',
  },
  {
    propertyName: 'appearance',
    value: 'noDivider',
  },
  {
    propertyName: 'placement',
    value: 'left',
  },
  {
    propertyName: 'placement',
    value: 'left start',
  },
  {
    propertyName: 'placement',
    value: 'left end',
  },
  {
    propertyName: 'placement',
    value: 'top',
  },
  {
    propertyName: 'placement',
    value: 'top start',
  },
  {
    propertyName: 'placement',
    value: 'top end',
  },
  {
    propertyName: 'placement',
    value: 'right',
  },
  {
    propertyName: 'placement',
    value: 'right start',
  },
  {
    propertyName: 'placement',
    value: 'right end',
  },
  {
    propertyName: 'placement',
    value: 'bottom',
  },
  {
    propertyName: 'placement',
    value: 'bottom start',
  },
  {
    propertyName: 'placement',
    value: 'bottom end',
  },
];
