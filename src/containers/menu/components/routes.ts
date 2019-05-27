import { StyleType } from '@kitten/theme';
import { ComponentsContainerData } from './type';
import {
  ComponentsIconAvatar,
  ComponentsIconBottomNavigation,
  ComponentsIconButton,
  ComponentsIconButtonGroup,
  ComponentsIconCheckBox,
  ComponentsIconInput,
  ComponentsIconList,
  ComponentsIconOverflowMenu,
  ComponentsIconPopover,
  ComponentsIconRadio,
  ComponentsIconTabView,
  ComponentsIconText,
  ComponentsIconToggle,
  ComponentsIconTooltip,
  ComponentsIconTopNavigation,
  ComponentsIconAvatarDark,
  ComponentsIconButtonDark,
  ComponentsIconButtonGroupDark,
  ComponentsIconCheckBoxDark,
  ComponentsIconInputDark,
  ComponentsIconListDark,
  ComponentsIconOverflowMenuDark,
  ComponentsIconPopoverDark,
  ComponentsIconRadioDark,
  ComponentsIconTabViewDark,
  ComponentsIconTextDark,
  ComponentsIconToggleDark,
  ComponentsIconTooltipDark,
  ComponentsIconTopNavigationDark,
  ComponentsIconBottomNavigationDark,
} from '@src/assets/icons';
import { MenuImage } from '../menuImage';
import { CurrentTheme } from '@src/core/model';

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconButton(style),
        dark: ComponentsIconButtonDark(style),
      }, currentTheme),
    route: 'Button',
  },
  {
    title: 'Button Group',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconButtonGroup(style),
        dark: ComponentsIconButtonGroupDark(style),
      }, currentTheme),
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconCheckBox(style),
        dark: ComponentsIconCheckBoxDark(style),
      }, currentTheme),
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconToggle(style),
        dark: ComponentsIconToggleDark(style),
      }, currentTheme),
    route: 'Toggle',
  },
  {
    title: 'Radio',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconRadio(style),
        dark: ComponentsIconRadioDark(style),
      }, currentTheme),
    route: 'Radio',
  },
  {
    title: 'Input',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconInput(style),
        dark: ComponentsIconInputDark(style),
      }, currentTheme),
    route: 'Input',
  },
  {
    title: 'Text',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconText(style),
        dark: ComponentsIconTextDark(style),
      }, currentTheme),
    route: 'Text',
  },
  {
    title: 'Avatar',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconAvatar(style),
        dark: ComponentsIconAvatarDark(style),
      }, currentTheme),
    route: 'Avatar',
  },
  {
    title: 'Popover',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconPopover(style),
        dark: ComponentsIconPopoverDark(style),
      }, currentTheme),
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconTooltip(style),
        dark: ComponentsIconTooltipDark(style),
      }, currentTheme),
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconOverflowMenu(style),
        dark: ComponentsIconOverflowMenuDark(style),
      }, currentTheme),
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconTabView(style),
        dark: ComponentsIconTabViewDark(style),
      }, currentTheme),
    route: 'Tab View',
  },
  {
    title: 'List',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconList(style),
        dark: ComponentsIconListDark(style),
      }, currentTheme),
    route: 'List',
  },
  {
    title: 'Top Navigation',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconTopNavigation(style),
        dark: ComponentsIconTopNavigationDark(style),
      }, currentTheme),
    route: 'Top Navigation',
  },
  {
    title: 'Bottom Navigation',
    icon: (style: StyleType, currentTheme: CurrentTheme) =>
      MenuImage.select({
        light: ComponentsIconBottomNavigation(style),
        dark: ComponentsIconBottomNavigationDark(style),
      }, currentTheme),
    route: 'Bottom Navigation',
  },
];
