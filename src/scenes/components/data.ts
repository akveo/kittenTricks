import React from 'react';
import { ImageProps } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssetAutocompleteDarkIcon,
  AssetAutocompleteIcon,
  AssetAvatarDarkIcon,
  AssetAvatarIcon,
  AssetBottomNavigationDarkIcon,
  AssetBottomNavigationIcon,
  AssetButtonDarkIcon,
  AssetButtonGroupDarkIcon,
  AssetButtonGroupIcon,
  AssetButtonIcon,
  AssetCalendarDarkIcon,
  AssetCalendarIcon,
  AssetCardDarkIcon,
  AssetCardIcon,
  AssetCheckBoxDarkIcon,
  AssetCheckBoxIcon,
  AssetDatepickerDarkIcon,
  AssetDatepickerIcon,
  AssetDrawerDarkIcon,
  AssetDrawerIcon,
  AssetIconDarkIcon,
  AssetIconIcon,
  AssetInputDarkIcon,
  AssetInputIcon,
  AssetListDarkIcon,
  AssetListIcon,
  AssetMenuDarkIcon,
  AssetMenuIcon,
  AssetModalDarkIcon,
  AssetModalIcon,
  AssetOverflowMenuDarkIcon,
  AssetOverflowMenuIcon,
  AssetPopoverDarkIcon,
  AssetPopoverIcon,
  AssetRadioDarkIcon,
  AssetRadioIcon,
  AssetSelectDarkIcon,
  AssetSelectIcon,
  AssetSpinnerDarkIcon,
  AssetSpinnerIcon,
  AssetTabViewDarkIcon,
  AssetTabViewIcon,
  AssetTextDarkIcon,
  AssetTextIcon,
  AssetToggleDarkIcon,
  AssetToggleIcon,
  AssetTooltipDarkIcon,
  AssetTooltipIcon,
  AssetTopNavigationDarkIcon,
  AssetTopNavigationIcon,
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface ComponentData extends MenuItem {
  route: string;
}

export const data: ComponentData[] = [
  {
    title: 'Autocomplete',
    route: 'Autocomplete',
    icon: (props: ImageProps) => {
      return React.createElement(ThemedIcon, {
        ...props, light: AssetAutocompleteIcon,
        dark: AssetAutocompleteDarkIcon,
      });
    },
  },
  {
    title: 'Avatar',
    route: 'Avatar',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetAvatarIcon, dark: AssetAvatarDarkIcon },
      );
    },
  },
  {
    title: 'BottomNavigation',
    route: 'BottomNavigation',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetBottomNavigationIcon, dark: AssetBottomNavigationDarkIcon },
      );
    },
  },
  {
    title: 'Button',
    route: 'Button',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetButtonIcon, dark: AssetButtonDarkIcon },
      );
    },
  },
  {
    title: 'ButtonGroup',
    route: 'ButtonGroup',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetButtonGroupIcon, dark: AssetButtonGroupDarkIcon },
      );
    },
  },
  {
    title: 'Calendar',
    route: 'Calendar',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetCalendarIcon, dark: AssetCalendarDarkIcon },
      );
    },
  },
  {
    title: 'Card',
    route: 'Card',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetCardIcon, dark: AssetCardDarkIcon },
      );
    },
  },
  {
    title: 'CheckBox',
    route: 'CheckBox',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetCheckBoxIcon, dark: AssetCheckBoxDarkIcon },
      );
    },
  },
  {
    title: 'Datepicker',
    route: 'Datepicker',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetDatepickerIcon, dark: AssetDatepickerDarkIcon },
      );
    },
  },
  {
    title: 'Drawer',
    route: 'Drawer',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetDrawerIcon, dark: AssetDrawerDarkIcon },
      );
    },
  },
  {
    title: 'Icon',
    route: 'Icon',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetIconIcon, dark: AssetIconDarkIcon },
      );
    },
  },
  {
    title: 'Input',
    route: 'Input',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetInputIcon, dark: AssetInputDarkIcon },
      );
    },
  },
  {
    title: 'Layout',
    route: 'Layout',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetModalIcon, dark: AssetModalDarkIcon },
      );
    },
  },
  {
    title: 'List',
    route: 'List',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetListIcon, dark: AssetListDarkIcon },
      );
    },
  },
  {
    title: 'Menu',
    route: 'Menu',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetMenuIcon, dark: AssetMenuDarkIcon },
      );
    },
  },
  {
    title: 'Modal',
    route: 'Modal',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetModalIcon, dark: AssetModalDarkIcon },
      );
    },
  },
  {
    title: 'OverflowMenu',
    route: 'OverflowMenu',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetOverflowMenuIcon, dark: AssetOverflowMenuDarkIcon },
      );
    },
  },
  {
    title: 'Popover',
    route: 'Popover',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetPopoverIcon, dark: AssetPopoverDarkIcon },
      );
    },
  },
  {
    title: 'Radio',
    route: 'Radio',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetRadioIcon, dark: AssetRadioDarkIcon },
      );
    },
  },
  {
    title: 'RadioGroup',
    route: 'RadioGroup',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetRadioIcon, dark: AssetRadioDarkIcon },
      );
    },
  },
  {
    title: 'RangeCalendar',
    route: 'RangeCalendar',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetCalendarIcon, dark: AssetCalendarDarkIcon },
      );
    },
  },
  {
    title: 'RangeDatepicker',
    route: 'RangeDatepicker',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetDatepickerIcon, dark: AssetDatepickerDarkIcon },
      );
    },
  },
  {
    title: 'Select',
    route: 'Select',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetSelectIcon, dark: AssetSelectDarkIcon },
      );
    },
  },
  {
    title: 'Spinner',
    route: 'Spinner',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetSpinnerIcon, dark: AssetSpinnerDarkIcon },
      );
    },
  },
  {
    title: 'TabView',
    route: 'TabView',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetTabViewIcon, dark: AssetTabViewDarkIcon },
      );
    },
  },
  {
    title: 'Text',
    route: 'Text',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetTextIcon, dark: AssetTextDarkIcon },
      );
    },
  },
  {
    title: 'Toggle',
    route: 'Toggle',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetToggleIcon, dark: AssetToggleDarkIcon },
      );
    },
  },
  {
    title: 'Tooltip',
    route: 'Tooltip',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetTooltipIcon, dark: AssetTooltipDarkIcon },
      );
    },
  },
  {
    title: 'TopNavigation',
    route: 'TopNavigation',
    icon: (props: ImageProps) => {
      return React.createElement(
        ThemedIcon,
        { ...props, light: AssetTopNavigationIcon, dark: AssetTopNavigationDarkIcon },
      );
    },
  },
];
