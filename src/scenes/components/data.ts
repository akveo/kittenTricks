import React from 'react';
import { ImageStyle } from 'react-native';
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
    icon: (style: ImageStyle) => {
      return React.createElement(ThemedIcon, {
        ...style, light: AssetAutocompleteIcon,
        dark: AssetAutocompleteDarkIcon,
      });
    },
  },
  {
    title: 'Avatar',
    route: 'Avatar',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetAvatarIcon, dark: AssetAvatarDarkIcon },
      );
    },
  },
  {
    title: 'BottomNavigation',
    route: 'BottomNavigation',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetBottomNavigationIcon, dark: AssetBottomNavigationDarkIcon },
      );
    },
  },
  {
    title: 'Button',
    route: 'Button',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetButtonIcon, dark: AssetButtonDarkIcon },
      );
    },
  },
  {
    title: 'ButtonGroup',
    route: 'ButtonGroup',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetButtonGroupIcon, dark: AssetButtonGroupDarkIcon },
      );
    },
  },
  {
    title: 'Calendar',
    route: 'Calendar',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetCalendarIcon, dark: AssetCalendarDarkIcon },
      );
    },
  },
  {
    title: 'Card',
    route: 'Card',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetCardIcon, dark: AssetCardDarkIcon },
      );
    },
  },
  {
    title: 'CheckBox',
    route: 'CheckBox',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetCheckBoxIcon, dark: AssetCheckBoxDarkIcon },
      );
    },
  },
  {
    title: 'Datepicker',
    route: 'Datepicker',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetDatepickerIcon, dark: AssetDatepickerDarkIcon },
      );
    },
  },
  {
    title: 'Drawer',
    route: 'Drawer',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetDrawerIcon, dark: AssetDrawerDarkIcon },
      );
    },
  },
  {
    title: 'Icon',
    route: 'Icon',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetIconIcon, dark: AssetIconDarkIcon },
      );
    },
  },
  {
    title: 'Input',
    route: 'Input',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetInputIcon, dark: AssetInputDarkIcon },
      );
    },
  },
  {
    title: 'Layout',
    route: 'Layout',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetModalIcon, dark: AssetModalDarkIcon },
      );
    },
  },
  {
    title: 'List',
    route: 'List',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetListIcon, dark: AssetListDarkIcon },
      );
    },
  },
  {
    title: 'Menu',
    route: 'Menu',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetMenuIcon, dark: AssetMenuDarkIcon },
      );
    },
  },
  {
    title: 'Modal',
    route: 'Modal',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetModalIcon, dark: AssetModalDarkIcon },
      );
    },
  },
  {
    title: 'OverflowMenu',
    route: 'OverflowMenu',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetOverflowMenuIcon, dark: AssetOverflowMenuDarkIcon },
      );
    },
  },
  {
    title: 'Popover',
    route: 'Popover',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetPopoverIcon, dark: AssetPopoverDarkIcon },
      );
    },
  },
  {
    title: 'Radio',
    route: 'Radio',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetRadioIcon, dark: AssetRadioDarkIcon },
      );
    },
  },
  {
    title: 'RadioGroup',
    route: 'RadioGroup',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetRadioIcon, dark: AssetRadioDarkIcon },
      );
    },
  },
  {
    title: 'RangeCalendar',
    route: 'RangeCalendar',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetCalendarIcon, dark: AssetCalendarDarkIcon },
      );
    },
  },
  {
    title: 'RangeDatepicker',
    route: 'RangeDatepicker',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetDatepickerIcon, dark: AssetDatepickerDarkIcon },
      );
    },
  },
  {
    title: 'Select',
    route: 'Select',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetSelectIcon, dark: AssetSelectDarkIcon },
      );
    },
  },
  {
    title: 'Spinner',
    route: 'Spinner',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetSpinnerIcon, dark: AssetSpinnerDarkIcon },
      );
    },
  },
  {
    title: 'TabView',
    route: 'TabView',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetTabViewIcon, dark: AssetTabViewDarkIcon },
      );
    },
  },
  {
    title: 'Text',
    route: 'Text',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetTextIcon, dark: AssetTextDarkIcon },
      );
    },
  },
  {
    title: 'Toggle',
    route: 'Toggle',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetToggleIcon, dark: AssetToggleDarkIcon },
      );
    },
  },
  {
    title: 'Tooltip',
    route: 'Tooltip',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetTooltipIcon, dark: AssetTooltipDarkIcon },
      );
    },
  },
  {
    title: 'TopNavigation',
    route: 'TopNavigation',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetTopNavigationIcon, dark: AssetTopNavigationDarkIcon },
      );
    },
  },
];
