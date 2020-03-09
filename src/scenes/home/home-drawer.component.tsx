import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Divider, DrawerElement, DrawerGroup, DrawerItem, IndexPath, Layout, Text } from '@ui-kitten/components';
import {
  BookIcon,
  BrowserIcon,
  ColorPaletteIcon,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  LayersIcon,
} from '../../components/icons';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';
import { BrandDrawer } from '../../components/brand-drawer.component';
import { ImageOverlay } from '../../layouts/social/feed-1/extra/image-overlay.component';

export const HomeDrawer = ({ navigation, state }): DrawerElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(state.index));

  const onHomeItemPress = ({ index }): void => {
    navigation.navigate('Home');
    setSelectedIndex(index);
  };

  const onLibrariesItemPress = ({ index }): void => {
    navigation.navigate('Libraries');
    setSelectedIndex(index);
  };

  const onDocumentationItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://akveo.github.io/react-native-ui-kitten');
    navigation.toggleDrawer();
  };

  const onEvaItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://eva.design');
    navigation.toggleDrawer();
  };

  const onNebularItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://akveo.github.io/nebular');
    navigation.toggleDrawer();
  };

  const onNGXAdminItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://akveo.github.io/ngx-admin');
    navigation.toggleDrawer();
  };

  const onUIBakeryItemPress = (): void => {
    WebBrowserService.openBrowserAsync('https://uibakery.io');
    navigation.toggleDrawer();
  };

  const renderHeader = (props: ViewProps): React.ReactElement => (
    <React.Fragment>
      <ImageOverlay
        style={[styles.header, props.style]}
        source={require('../../assets/images/image-app-icon.png')}
      />
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
    <BrandDrawer
      selectedIndex={selectedIndex}
      header={renderHeader}
      footer={renderFooter}>
      <DrawerItem
        title='Home'
        accessoryLeft={HomeIcon}
        onPress={onHomeItemPress}
      />
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
      <DrawerGroup
        title='More from Akveo'
        accessoryLeft={HeartIcon}>
        <DrawerItem
          title='UI Kitten'
          accessoryLeft={GithubIcon}
          onPress={onDocumentationItemPress}
        />
        <DrawerItem
          title='Eva Design System'
          accessoryLeft={ColorPaletteIcon}
          onPress={onEvaItemPress}
        />
        <DrawerItem
          title='Nebular'
          accessoryLeft={GlobeIcon}
          onPress={onNebularItemPress}
        />
        <DrawerItem
          title='ngx-admin'
          accessoryLeft={BrowserIcon}
          onPress={onNGXAdminItemPress}
        />
        <DrawerItem
          title='UI Bakery'
          accessoryLeft={LayersIcon}
          onPress={onUIBakeryItemPress}
        />
      </DrawerGroup>
    </BrandDrawer>
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
