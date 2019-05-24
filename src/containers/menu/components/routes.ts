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

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconButton(style) : ComponentsIconButtonDark(style),
    route: 'Button',
  },
  {
    title: 'Button Group',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconButtonGroup(style) : ComponentsIconButtonGroupDark(style),
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconCheckBox(style) : ComponentsIconCheckBoxDark(style),
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconToggle(style) : ComponentsIconToggleDark(style),
    route: 'Toggle',
  },
  {
    title: 'Radio',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconRadio(style) : ComponentsIconRadioDark(style),
    route: 'Radio',
  },
  {
    title: 'Input',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconInput(style) : ComponentsIconInputDark(style),
    route: 'Input',
  },
  {
    title: 'Text',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconText(style) : ComponentsIconTextDark(style),
    route: 'Text',
  },
  {
    title: 'Avatar',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconAvatar(style) : ComponentsIconAvatarDark(style),
    route: 'Avatar',
  },
  {
    title: 'Popover',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconPopover(style) : ComponentsIconPopoverDark(style),
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconTooltip(style) : ComponentsIconTooltipDark(style),
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconOverflowMenu(style) : ComponentsIconOverflowMenuDark(style),
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconTabView(style) : ComponentsIconTabViewDark(style),
    route: 'Tab View',
  },
  {
    title: 'List',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconList(style) : ComponentsIconListDark(style),
    route: 'List',
  },
  {
    title: 'Top Navigation',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconTopNavigation(style) : ComponentsIconTopNavigationDark(style),
    route: 'Top Navigation',
  },
  {
    title: 'Bottom Navigation',
    icon: (style: StyleType, theme: 'light' | 'dark') => theme === 'light' ?
      ComponentsIconBottomNavigation(style) : ComponentsIconBottomNavigationDark(style),
    route: 'Bottom Navigation',
  },
];
