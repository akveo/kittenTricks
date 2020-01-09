import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { TrainingsListScreen } from './traininig-list.component';
import { ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';

const TrainingsTabBar = ({ navigation, state }): React.ReactElement => {

  const safeArea = useSafeArea();

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <Layout
      style={{ paddingTop: safeArea.top }}
      level='2'>
      <TopNavigation
        alignment='center'
        leftControl={renderBackAction()}
        title='Trainings'
      />
      <TabBar
        selectedIndex={state.index}
        onSelect={onTabSelect}>
        {state.routeNames.map(renderTab)}
      </TabBar>
    </Layout>
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
