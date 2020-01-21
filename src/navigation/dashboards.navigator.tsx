import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DashboardScreen } from '../scenes/dashboards/dashboards.component';
import { DashboardGridScreen } from '../scenes/dashboards/dashboards-grid.component';
import { DashboardsListScreen } from '../scenes/dashboards/dashboards-list.component';
import { Trainings1Screen } from '../scenes/dashboards/trainings-1.component';
import { Trainings2Screen } from '../scenes/dashboards/trainings-2.component';
import { SettingsScreen } from '../scenes/dashboards/settings.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const DashboardsMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <DashboardScreen {...props}/>}>
    <TopTab.Screen name='DashboardGrid' component={DashboardGridScreen}/>
    <TopTab.Screen name='DashboardList' component={DashboardsListScreen}/>
  </TopTab.Navigator>
);

export const DashboardsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Dashboards' component={DashboardsMenuNavigator}/>
    <Stack.Screen name='Trainings1' component={Trainings1Screen}/>
    <Stack.Screen name='Trainings2' component={Trainings2Screen}/>
    <Stack.Screen name='Settings' component={SettingsScreen}/>
  </Stack.Navigator>
);
