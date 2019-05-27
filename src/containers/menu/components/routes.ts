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
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconButton(style),
        'Eva Dark': ComponentsIconButtonDark(style),
      }, currentTheme);
    },
    route: 'Button',
  },
  {
    title: 'Button Group',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconButtonGroup(style),
        'Eva Dark': ComponentsIconButtonGroupDark(style),
      }, currentTheme);
    },
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconCheckBox(style),
        'Eva Dark': ComponentsIconCheckBoxDark(style),
      }, currentTheme);
    },
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconToggle(style),
        'Eva Dark': ComponentsIconToggleDark(style),
      }, currentTheme);
    },
    route: 'Toggle',
  },
  {
    title: 'Radio',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconRadio(style),
        'Eva Dark': ComponentsIconRadioDark(style),
      }, currentTheme);
    },
    route: 'Radio',
  },
  {
    title: 'Input',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconInput(style),
        'Eva Dark': ComponentsIconInputDark(style),
      }, currentTheme);
    },
    route: 'Input',
  },
  {
    title: 'Text',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconText(style),
        'Eva Dark': ComponentsIconTextDark(style),
      }, currentTheme);
    },
    route: 'Text',
  },
  {
    title: 'Avatar',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconAvatar(style),
        'Eva Dark': ComponentsIconAvatarDark(style),
      }, currentTheme);
    },
    route: 'Avatar',
  },
  {
    title: 'Popover',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconPopover(style),
        'Eva Dark': ComponentsIconPopoverDark(style),
      }, currentTheme);
    },
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTooltip(style),
        'Eva Dark': ComponentsIconTooltipDark(style),
      }, currentTheme);
    },
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconOverflowMenu(style),
        'Eva Dark': ComponentsIconOverflowMenuDark(style),
      }, currentTheme);
    },
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTabView(style),
        'Eva Dark': ComponentsIconTabViewDark(style),
      }, currentTheme);
    },
    route: 'Tab View',
  },
  {
    title: 'List',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconList(style),
        'Eva Dark': ComponentsIconListDark(style),
      }, currentTheme);
    },
    route: 'List',
  },
  {
    title: 'Top Navigation',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTopNavigation(style),
        'Eva Dark': ComponentsIconTopNavigationDark(style),
      }, currentTheme);
    },
    route: 'Top Navigation',
  },
  {
    title: 'Bottom Navigation',
    icon: (style: StyleType, currentTheme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconBottomNavigation(style),
        'Eva Dark': ComponentsIconBottomNavigationDark(style),
      }, currentTheme);
    },
    route: 'Bottom Navigation',
  },
];
