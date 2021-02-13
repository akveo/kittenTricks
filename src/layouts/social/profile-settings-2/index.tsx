import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ProfileSetting } from './extra/profile-setting.component';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { CameraIcon } from './extra/icons';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const onDoneButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.photoButton}
      size='small'
      status='basic'
      accessoryLeft={CameraIcon}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Layout
        style={styles.photoSection}
        level='1'>
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
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  contentContainer: {
    paddingBottom: 24,
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
    marginHorizontal: 24,
    marginTop: 24,
  },
  setting: {
    padding: 16,
  },
  emailSetting: {
    marginTop: 24,
  },
});
