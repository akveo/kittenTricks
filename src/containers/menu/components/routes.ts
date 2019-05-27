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
import { ThemeKey } from '@src/core/themes';

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconButton(style) : ComponentsIconButtonDark(style);
    },
    route: 'Button',
  },
  {
    title: 'Button Group',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconButtonGroup(style) : ComponentsIconButtonGroupDark(style);
    },
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconCheckBox(style) : ComponentsIconCheckBoxDark(style);
    },
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconToggle(style) : ComponentsIconToggleDark(style);
    },
    route: 'Toggle',
  },
  {
    title: 'Radio',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconRadio(style) : ComponentsIconRadioDark(style);
    },
    route: 'Radio',
  },
  {
    title: 'Input',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconInput(style) : ComponentsIconInputDark(style);
    },
    route: 'Input',
  },
  {
    title: 'Text',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconText(style) : ComponentsIconTextDark(style);
    },
    route: 'Text',
  },
  {
    title: 'Avatar',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconAvatar(style) : ComponentsIconAvatarDark(style);
    },
    route: 'Avatar',
  },
  {
    title: 'Popover',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconPopover(style) : ComponentsIconPopoverDark(style);
    },
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconTooltip(style) : ComponentsIconTooltipDark(style);
    },
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconOverflowMenu(style) : ComponentsIconOverflowMenuDark(style);
    },
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconTabView(style) : ComponentsIconTabViewDark(style);
    },
    route: 'Tab View',
  },
  {
    title: 'List',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconList(style) : ComponentsIconListDark(style);
    },
    route: 'List',
  },
  {
    title: 'Top Navigation',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconTopNavigation(style) : ComponentsIconTopNavigationDark(style);
    },
    route: 'Top Navigation',
  },
  {
    title: 'Bottom Navigation',
    icon: (style: StyleType, theme: ThemeKey) => {
      return theme === 'Eva Light' ? ComponentsIconBottomNavigation(style) : ComponentsIconBottomNavigationDark(style);
    },
    route: 'Bottom Navigation',
  },
];
