import React, { ReactElement, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerItem,
  DrawerElement,
  Layout,
  Text,
  IndexPath,
} from '@ui-kitten/components';
import { BookIcon, GithubIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

const version: string = AppInfoService.getVersion();

export const HomeDrawer = ({ navigation }): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null);

  const DATA = [
    {
      title: 'Libraries',
      icon: GithubIcon,
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
      },
    },
    {
      title: 'Documentation',
      icon: BookIcon,
      onPress: () => {
        WebBrowserService.openBrowserAsync(
          'https://akveo.github.io/react-native-ui-kitten'
        );
        navigation.toggleDrawer();
      },
    },
  ];

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
        return;
      }
      case 1: {
        WebBrowserService.openBrowserAsync(
          'https://akveo.github.io/react-native-ui-kitten'
        );
        navigation.toggleDrawer();
        return;
      }
    }
  };

  const renderHeader = (): ReactElement => (
    <Layout style={styles.header} level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../../assets/images/image-app-icon.png')}
        />
        <Text style={styles.profileName} category='h6'>
          Kitten Tricks
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = () => (
    <React.Fragment>
      <Divider />
      <View>
        <Text>{`Version ${AppInfoService.getVersion()}`}</Text>
      </View>
    </React.Fragment>
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {DATA.map((el, index) => (
          <DrawerItem
            key={index}
            title={el.title}
            onPress={el.onPress}
            accessoryLeft={el.icon}
          />
        ))}
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
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
