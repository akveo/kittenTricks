import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Input, Layout, TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { CloseIcon, SearchIcon } from '../../components/icons';
import { ComponentData, data } from './data';

export const ComponentsScreen = (props): React.ReactElement => {

  const [query, setQuery] = React.useState<string>('');

  const displayData: ComponentData[] = data.filter((componentData: ComponentData): boolean => {
    return componentData.title.toLowerCase().startsWith(query.toLowerCase());
  });

  const onItemPress = (index: number): void => {
    props.navigation.navigate(displayData[index].route);
  };

  const onInputIconPress = (): void => {
    setQuery('');
  };

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Kitten Tricks'
        alignment='center'
      />
      <Divider/>
      <Layout
        style={styles.searchContainer}
        level='1'>
        <Input
          value={query}
          onChangeText={setQuery}
          placeholder='Search'
          icon={query ? CloseIcon : SearchIcon}
          onIconPress={onInputIconPress}
        />
      </Layout>
      <MenuGridList
        contentContainerStyle={styles.menuGrid}
        data={displayData}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  menuGrid: {
    paddingVertical: 0,
    paddingHorizontal: 8,
  },
});
