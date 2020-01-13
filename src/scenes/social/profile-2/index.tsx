import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { RateBar } from './extra/rate-bar.component';
import { ProfileSocial } from './extra/profile-social.component';
import { ProfileParameterCard } from './extra/profile-parameter-card.component';
import { ArrowHeadDownIcon, ArrowHeadUpIcon, ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [rating, setRating] = React.useState(profile.experience);

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
        title='Profile'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <Layout style={styles.header}>
        <View style={styles.profileContainer}>
          <Avatar
            style={styles.profileAvatar}
            size='large'
            source={profile.photo}
          />
          <View style={styles.profileDetailsContainer}>
            <Text category='h4'>
              {profile.fullName}
            </Text>
            <Text
              appearance='hint'
              category='s1'>
              {profile.location}
            </Text>
            <RateBar
              style={styles.rateBar}
              hint='Experience'
              value={rating}
              onValueChange={setRating}
            />
          </View>
        </View>
        <Button style={styles.followButton}>
          FOLLOW
        </Button>
        <Text
          style={styles.descriptionText}
          appearance='hint'>
          {profile.description}
        </Text>
      </Layout>
      <View style={styles.profileParametersContainer}>
        <View style={styles.profileSocialsSection}>
          <ProfileSocial
            style={styles.profileSocialContainer}
            hint='Followers'
            value={`${profile.followers}`}
          />
          <ProfileSocial
            style={styles.profileSocialContainer}
            hint='Following'
            value={`${profile.following}`}
          />
          <ProfileSocial
            style={styles.profileSocialContainer}
            hint='Posts'
            value={`${profile.posts}`}
          />
        </View>
        <Divider style={styles.profileSectionsDivider}/>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Height'
            value={`${profile.height} cm`}
            icon={ArrowHeadUpIcon}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Weight'
            value={`${profile.weight} kg`}
            icon={ArrowHeadDownIcon}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    marginTop: 24,
  },
  descriptionText: {
    marginTop: 24,
    marginBottom: 8,
  },
  profileParametersContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    marginHorizontal: 8,
  },
  profileSectionsDivider: {
    width: 1,
    height: '100%',
    marginHorizontal: 8,
  },
  profileSocialsSection: {
    marginHorizontal: 16,
  },
  profileSocialContainer: {
    flex: 1,
  },
  profileParametersSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  profileParameter: {
    marginBottom: 16,
  },
});
