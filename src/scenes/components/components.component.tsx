import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Text, TextProps, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { MenuIcon } from '../../components/icons';
import { data } from './data';

export const ComponentsScreen = ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  const renderTitle = (props: TextProps): React.ReactElement => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.titleImage}
        size='small'
        source={require('../../assets/images/image-app-icon.png')}
      />
      <Text {...props}>
        Kitten Tricks
      </Text>
    </View>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title={renderTitle}
        // title='Kitten Tricks'
        accessoryLeft={renderDrawerAction}
      />
      <Divider/>
      <MenuGridList
        data={data}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImage: {
    marginHorizontal: 8,
  },
});
