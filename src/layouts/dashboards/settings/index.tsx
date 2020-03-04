import React from 'react';
import { Menu, MenuItem, StyleService, Toggle, useStyleSheet } from '@ui-kitten/components';

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyle);

  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(false);

  const toggleSound = (): void => {
    setSoundEnabled(!soundEnabled);
  };

  const renderSoundToggle = (): React.ReactElement => (
    <Toggle
      checked={soundEnabled}
      onChange={setSoundEnabled}
    />
  );

  return (
    <Menu style={styles.container}>
      <MenuItem title='Edit Profile'/>
      <MenuItem title='Change Password'/>
      <MenuItem title='Notifications'/>
      <MenuItem title='Privacy'/>
      <MenuItem
        title='Sound Enabled'
        accessoryRight={renderSoundToggle}
        onPress={toggleSound}
      />
    </Menu>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
});
