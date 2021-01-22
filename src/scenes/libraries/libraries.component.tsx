import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  Divider,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, ArrowIosForwardIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { data } from './data';
import { Library } from './type';

export const LibrariesScreen = ({ navigation }): React.ReactElement => {

  const theme = useTheme();

  const onItemPress = (index: number): void => {
    WebBrowserService.openBrowserAsync(data[index].link).then();
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderForwardIcon = (style): React.ReactElement => (
    <ArrowIosForwardIcon
      {...style}
      width='24'
      height='24'
      fill={theme['text-hint-color']}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Library>): React.ReactElement => (
    <ListItem
      style={styles.item}
      title={info.item.title}
      description={info.item.description}
      accessoryRight={renderForwardIcon}
      onPress={() => onItemPress(info.index)}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <React.Fragment>
      <Text
        style={styles.headerTitle}
        category='s2'>
        This application is built with usage of tons Open Source community-driven libraries.
        This is our thanks to maintainers.
      </Text>
      <Divider style={styles.headerDivider}/>
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Libraries'
        accessoryLeft={renderBackAction}
      />
      <List
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerTitle: {
    paddingHorizontal: 8,
  },
  headerDivider: {
    marginVertical: 8,
  },
  listContent: {
    padding: 8,
  },
  item: {
    marginVertical: 4,
  },
});
