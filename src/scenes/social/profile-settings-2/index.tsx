import React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { ProfileSetting } from './extra/profile-setting.component';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { ArrowIosBackIcon, CameraIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const styles = StyleSheet.create();

  const onDoneButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.photoButton}
      size='small'
      status='basic'
      icon={CameraIcon}
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
      <Layout style={styles.photoSection}>
        <ProfileAvatar
          style={styles.photo}
          source={profile.photo}
          editButton={renderPhotoButton}
        />
        <View style={styles.nameSection}>
          <ProfileSetting
            style={styles.setting}
            value={profile.firstName}
          />
          <ProfileSetting
            style={styles.setting}
            value={profile.lastName}
          />
        </View>
      </Layout>
      <Text
        style={styles.description}
        appearance='hint'>
        {profile.description}
      </Text>
      <ProfileSetting
        style={[styles.setting, styles.emailSetting]}
        hint='Email'
        value={profile.email}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Gender'
        value={profile.gender}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Age'
        value={`${profile.age}`}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Weight'
        value={`${profile.weight} kg`}
      />
      <ProfileSetting
        style={styles.setting}
        hint='Height'
        value={`${profile.height} cm`}
      />
      <Button
        style={styles.doneButton}
        onPress={onDoneButtonPress}>
        DONE
      </Button>
    </Layout>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flex: 1,
  },
  photoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  photo: {
    aspectRatio: 1.0,
    height: 76,
  },
  photoButton: {
    aspectRatio: 1.0,
    height: 32,
    borderRadius: 16,
  },
  nameSection: {
    flex: 1,
    marginHorizontal: 8,
  },
  description: {
    padding: 24,
    backgroundColor: 'background-basic-color-1',
  },
  doneButton: {
    margin: 24,
  },
  setting: {
    padding: 16,
  },
  emailSetting: {
    marginTop: 24,
  },
});
