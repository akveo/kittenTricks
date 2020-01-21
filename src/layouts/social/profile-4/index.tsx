import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Layout, Text } from '@ui-kitten/components';
import { RateBar } from './extra/rate-bar.component';
import { ProfileSocial } from './extra/profile-social.component';
import { ProfileParameterCard } from './extra/profile-parameter-card.component';
import { ArrowHeadDownIcon, ArrowHeadUpIcon } from './extra/icons';
import { Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

export default ({ navigation }): React.ReactElement => {

  const [rating, setRating] = React.useState<number>(profile.experience);

  const onFollowButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  return (
    <Layout
      style={styles.container}
      level='2'>
      <Layout
        style={styles.header}
        level='1'>
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
        <View style={styles.profileSocialsContainer}>
          <ProfileSocial
            hint='Followers'
            value={`${profile.followers}`}
          />
          <ProfileSocial
            hint='Following'
            value={`${profile.following}`}
          />
          <ProfileSocial
            hint='Posts'
            value={`${profile.posts}`}
          />
        </View>
        <Button
          style={styles.followButton}
          onPress={onFollowButtonPress}>
          FOLLOW
        </Button>
        <Text
          style={styles.profileDescription}
          appearance='hint'>
          {profile.description}
        </Text>
      </Layout>
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
  profileSocialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  profileSectionsDivider: {
    width: 1,
    height: '100%',
    marginHorizontal: 8,
  },
  profileDescription: {
    marginTop: 24,
    marginBottom: 8,
  },
  profileParametersSection: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 8,
  },
});
