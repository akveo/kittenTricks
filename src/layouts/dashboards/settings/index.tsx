import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Toggle } from '@ui-kitten/components';
import { Setting } from './extra/settings-section.component';

export default (): React.ReactElement => {

  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(false);

  const toggleSound = (): void => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <Layout style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});
