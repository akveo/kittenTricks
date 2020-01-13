import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { ProfileSetting } from './extra/profile-setting.component';
import { ArrowIosBackIcon, CameraIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();

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
      style={styles.editAvatarButton}
      status='basic'
      icon={CameraIcon}
    />
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        style={styles.header}
        alignment='center'
        title='Settings'
        leftControl={renderBackAction()}
      />
      <ProfileAvatar
        style={styles.profileAvatar}
        source={profile.photo}
        editButton={renderPhotoButton}
      />
      <ProfileSetting
        style={[styles.profileSetting, styles.section]}
        hint='First Name'
        value={profile.firstName}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Last Name'
        value={profile.lastName}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Gender'
        value={profile.gender}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Age'
        value={`${profile.age}`}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Weight'
        value={`${profile.weight} kg`}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Height'
        value={`${profile.height} cm`}
      />
      <ProfileSetting
        style={[styles.profileSetting, styles.section]}
        hint='Email'
        value={profile.email}
      />
      <ProfileSetting
        style={styles.profileSetting}
        hint='Phone Number'
        value={profile.phoneNumber}
      />
      <Button
        style={styles.doneButton}
        onPress={onDoneButtonPress}>
        DONE
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 24,
  },
  profileAvatar: {
    aspectRatio: 1.0,
    height: 124,
    alignSelf: 'center',
  },
  editAvatarButton: {
    aspectRatio: 1.0,
    height: 48,
    borderRadius: 24,
  },
  profileSetting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  doneButton: {
    margin: 24,
  },
});
