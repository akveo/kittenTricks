import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import { TrainingsListScreen } from './traininig-list.component';

const TrainingsTabBar = ({ navigation, state }): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      {state.routeNames.map(renderTab)}
    </TabBar>
  );
};

const TopTab = createMaterialTopTabNavigator();

export default (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <TrainingsTabBar {...props} />}>
    <TopTab.Screen name='Easy' component={TrainingsListScreen}/>
    <TopTab.Screen name='Middle' component={TrainingsListScreen}/>
    <TopTab.Screen name='Hard' component={TrainingsListScreen}/>
  </TopTab.Navigator>
);
