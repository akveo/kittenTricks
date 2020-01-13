import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Setting } from './extra/settings-section.component';
import { ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(false);

  const toggleSound = (): void => {
    setSoundEnabled(!soundEnabled);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Settings'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <Layout style={styles.settingContainer}>
        <Setting
          style={styles.setting}
          hint='Edit Profile'
        />
        <Setting
          style={styles.setting}
          hint='Change Password'
        />
        <Setting
          style={[styles.setting, styles.section]}
          hint='Notification'
        />
        <Setting
          style={styles.setting}
          hint='Privacy'
        />
        <Setting
          style={[styles.setting, styles.section]}
          hint='Sound Enabled'
          onPress={toggleSound}>
          <Toggle
            checked={soundEnabled}
            onChange={toggleSound}
          />
        </Setting>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingContainer: {
    flex: 1,
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});
