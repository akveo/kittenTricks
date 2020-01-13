import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ComponentsScreen } from '../scenes/components/components.component';
import { AutocompleteScreen } from '../scenes/components/autocomplete/autocomplete.component';
import { AvatarScreen } from '../scenes/components/avatar/avatar.component';
import { BottomNavigationScreen } from '../scenes/components/bottom-navigation/bottom-navigation.component';
import { ButtonScreen } from '../scenes/components/button/button.component';
import { ButtonGroupScreen } from '../scenes/components/button-group/button-group.component';
import { CalendarScreen } from '../scenes/components/calendar/calendar.component';
import { CardScreen } from '../scenes/components/card/card.component';
import { CheckBoxScreen } from '../scenes/components/checkbox/checkbox.component';
import { DatepickerScreen } from '../scenes/components/datepicker/datepicker.component';
import { DrawerScreen } from '../scenes/components/drawer/drawer.component';
import { IconScreen } from '../scenes/components/icon/icon.component';
import { InputScreen } from '../scenes/components/input/input.component';
import { LayoutScreen } from '../scenes/components/layout/layout.component';
import { ListScreen } from '../scenes/components/list/list.component';
import { MenuScreen } from '../scenes/components/menu/menu.component';
import { ModalScreen } from '../scenes/components/modal/modal.component';
import { OverflowMenuScreen } from '../scenes/components/overflow-menu/overflow-menu.component';
import { PopoverScreen } from '../scenes/components/popover/popover.component';
import { RadioScreen } from '../scenes/components/radio/radio.component';
import { RadioGroupScreen } from '../scenes/components/radio-group/radio-group.component';
import { RangeCalendarScreen } from '../scenes/components/range-calendar/range-calendar.component';
import { RangeDatepickerScreen } from '../scenes/components/range-datepicker/range-datepicker.component';
import { SelectScreen } from '../scenes/components/select/select.component';
import { SpinnerScreen } from '../scenes/components/spinner/spinner.component';
import { TabViewScreen } from '../scenes/components/tab-view/tab-view.component';
import { TextScreen } from '../scenes/components/text/text.component';
import { ToggleScreen } from '../scenes/components/toggle/toggle.component';
import { TooltipScreen } from '../scenes/components/tooltip/tooltip.component';
import { TopNavigationScreen } from '../scenes/components/top-navigation/top-navigation.component';

const Stack = createStackNavigator();

export const ComponentsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Components' component={ComponentsScreen}/>
    <Stack.Screen name='Autocomplete' component={AutocompleteScreen}/>
    <Stack.Screen name='Avatar' component={AvatarScreen}/>
    <Stack.Screen name='BottomNavigation' component={BottomNavigationScreen}/>
    <Stack.Screen name='Button' component={ButtonScreen}/>
    <Stack.Screen name='ButtonGroup' component={ButtonGroupScreen}/>
    <Stack.Screen name='Calendar' component={CalendarScreen}/>
    <Stack.Screen name='Card' component={CardScreen}/>
    <Stack.Screen name='CheckBox' component={CheckBoxScreen}/>
    <Stack.Screen name='Datepicker' component={DatepickerScreen}/>
    <Stack.Screen name='Drawer' component={DrawerScreen}/>
    <Stack.Screen name='Icon' component={IconScreen}/>
    <Stack.Screen name='Input' component={InputScreen}/>
    <Stack.Screen name='Layout' component={LayoutScreen}/>
    <Stack.Screen name='List' component={ListScreen}/>
    <Stack.Screen name='Menu' component={MenuScreen}/>
    <Stack.Screen name='Modal' component={ModalScreen}/>
    <Stack.Screen name='OverflowMenu' component={OverflowMenuScreen}/>
    <Stack.Screen name='Popover' component={PopoverScreen}/>
    <Stack.Screen name='Radio' component={RadioScreen}/>
    <Stack.Screen name='RadioGroup' component={RadioGroupScreen}/>
    <Stack.Screen name='RangeCalendar' component={RangeCalendarScreen}/>
    <Stack.Screen name='RangeDatepicker' component={RangeDatepickerScreen}/>
    <Stack.Screen name='Select' component={SelectScreen}/>
    <Stack.Screen name='Spinner' component={SpinnerScreen}/>
    <Stack.Screen name='TabView' component={TabViewScreen}/>
    <Stack.Screen name='Text' component={TextScreen}/>
    <Stack.Screen name='Toggle' component={ToggleScreen}/>
    <Stack.Screen name='Tooltip' component={TooltipScreen}/>
    <Stack.Screen name='TopNavigation' component={TopNavigationScreen}/>
  </Stack.Navigator>
);
