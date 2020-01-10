import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Layout, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { ProfileSetting } from './extra/profile-setting.component';
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ProfileAvatar
          style={styles.photo}
          source={profile.photo}
          editButton={renderPhotoButton}
        />
        <Text
          style={[styles.description, styles.section]}
          appearance='hint'>
          {profile.description}
        </Text>
        <ProfileSetting
          style={[styles.setting, styles.section]}
          hint='First Name'
          value={profile.firstName}
        />
        <ProfileSetting
          style={styles.setting}
          hint='Last Name'
          value={profile.lastName}
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
        <ProfileSetting
          style={[styles.setting, styles.section]}
          hint='Email'
          value={profile.email}
        />
        <ProfileSetting
          style={styles.setting}
          hint='Phone Number'
          value={profile.phoneNumber}
        />
        <Button
          style={styles.doneButton}
          onPress={onDoneButtonPress}>
          DONE
        </Button>
      </ScrollView>
    </Layout>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 24,
  },
  photo: {
    alignSelf: 'center',
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  photoButton: {
    right: 16,
    top: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  description: {
    padding: 24,
    backgroundColor: 'background-basic-color-1',
  },
  setting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});

