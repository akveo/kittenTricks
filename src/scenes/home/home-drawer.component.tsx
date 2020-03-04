import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Avatar, Divider, Drawer, DrawerElement, DrawerItem, Layout, Text } from '@ui-kitten/components';
import { BookIcon, GithubIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

export const HomeDrawer = ({ navigation }): DrawerElement => {

  const onLibrariesItemPress = (): void => {
    navigation.toggleDrawer();
    navigation.navigate('Libraries');
  };

  const onDocumentationItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://akveo.github.io/react-native-ui-kitten');
    navigation.toggleDrawer();
  };

  const renderHeader = (props: ViewProps): React.ReactElement => (
    <React.Fragment>
      <Layout
        style={[styles.header, props.style]}
        level='2'>
        <Avatar source={require('../../assets/images/image-app-icon.png')}/>
        <Text
          style={styles.headerTitle}
          category='h6'>
          Kitten Tricks
        </Text>
      </Layout>
      <Divider/>
    </React.Fragment>
  );

  const renderFooter = (props: ViewProps): React.ReactElement => (
    <React.Fragment>
      <Divider/>
      <Layout {...props}>
        <Text
          appearance='hint'
          category='c1'>
          {`Version ${AppInfoService.getVersion()}`}
        </Text>
      </Layout>
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}>
        <DrawerItem
          title='Libraries'
          accessoryLeft={GithubIcon}
          onPress={onLibrariesItemPress}
        />
        <DrawerItem
          title='Documentation'
          accessoryLeft={BookIcon}
          onPress={onDocumentationItemPress}
        />
      </Drawer>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginHorizontal: 8,
  },
  versionText: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
