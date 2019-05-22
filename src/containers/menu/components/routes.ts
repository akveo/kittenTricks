import {
  AvatarShowcase,
  ButtonGroupShowcase,
  ButtonShowcase,
  CheckBoxShowcase,
  InputShowcase,
  OverflowMenuShowcase,
  PopoverShowcase,
  RadioShowcase,
  TextShowcase,
  ToggleShowcase,
  TooltipShowcase,
} from '@src/containers/components';
import { ComplexComponentShowcase } from './complexShowcase.component';
import { ComponentsContainerData } from './type';

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    showcase: ButtonShowcase,
    route: 'Button',
  },
  {
    title: 'Button Group',
    showcase: ButtonGroupShowcase,
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    showcase: CheckBoxShowcase,
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    showcase: ToggleShowcase,
    route: 'Toggle',
  },
  {
    title: 'Radio',
    showcase: RadioShowcase,
    route: 'Radio',
  },
  {
    title: 'Input',
    showcase: InputShowcase,
    route: 'Input',
  },
  {
    title: 'Text',
    showcase: TextShowcase,
    route: 'Text',
  },
  {
    title: 'Avatar',
    showcase: AvatarShowcase,
    route: 'Avatar',
  },
  {
    title: 'Popover',
    showcase: PopoverShowcase,
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    showcase: TooltipShowcase,
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    showcase: OverflowMenuShowcase,
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    showcase: ComplexComponentShowcase,
    route: 'Tab View',
  },
  {
    title: 'List',
    showcase: ComplexComponentShowcase,
    route: 'List',
  },
  {
    title: 'App Bar',
    showcase: ComplexComponentShowcase,
    route: 'App Bar',
  },
  {
    title: 'Bottom Navigation',
    showcase: ComplexComponentShowcase,
    route: 'Bottom Navigation',
  },
  {
    title: 'View Pager',
    showcase: ComplexComponentShowcase,
    route: 'View Pager',
  },
];
