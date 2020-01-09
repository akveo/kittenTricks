import React from 'react';
import { ImageBackground, ListRenderItemInfo, ScrollView, StyleSheet, View, YellowBox } from 'react-native';
import { Avatar, Button, Layout, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ProfileSocial } from './extra/profile-social.component';
import { ArrowIosBackIcon, MessageCircleIcon, PersonAddIcon, PinIcon } from './extra/icons';
import { useNavigation, useSafeArea } from './extra/3rd-party';
import { Post, Profile } from './extra/data';

/*
 * Will warn because container view is ScrollView that contains 3 List components inside.
 * Better workaround depends on the user needs.
 */
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested inside plain ScrollViews']);

const profile: Profile = Profile.helenKuper();

const friends: Profile[] = [
  Profile.jenAustin(),
  Profile.jenniferGreen(),
  Profile.helenKuper(),
  Profile.jenAustin(),
  Profile.jenniferGreen(),
  Profile.helenKuper(),
];

const posts: Post[] = [
  Post.plant1(),
  Post.travel1(),
  Post.style1(),
  Post.style1(),
  Post.plant1(),
  Post.travel1(),
  Post.travel1(),
  Post.style1(),
  Post.plant1(),
];

export default (): React.ReactElement => {

  const navigation = useNavigation();
  const safeArea = useSafeArea();

  const onFollowButtonPress = (): void => {

  };

  const onMessageButtonPress = (): void => {
    navigation.navigate('Chat2');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderFriendItem = (info: ListRenderItemInfo<Profile>): React.ReactElement => (
    <View style={styles.friendItem}>
      <Avatar source={info.item.photo}/>
      <Text
        style={styles.friendName}
        category='c2'>
        {info.item.firstName}
      </Text>
    </View>
  );

  const renderPostItem = (info: ListRenderItemInfo<Post>): React.ReactElement => (
    <ImageBackground
      style={styles.postItem}
      source={info.item.photo}
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
      <ScrollView style={styles.container}>
        <ImageOverlay
          style={styles.header}
          source={require('./assets/image-background.jpg')}>
          <Avatar
            style={styles.profileAvatar}
            source={profile.photo}
          />
          <Text
            category='h5'
            status='control'>
            {profile.fullName}
          </Text>
          <View style={styles.locationContainer}>
            <PinIcon/>
            <Text
              style={styles.location}
              status='control'>
              {profile.location}
            </Text>
          </View>
          <View style={styles.profileButtonsContainer}>
            <Button
              style={styles.profileButton}
              icon={PersonAddIcon}
              onPress={onFollowButtonPress}>
              FOLLOW
            </Button>
            <Button
              style={styles.profileButton}
              status='control'
              icon={MessageCircleIcon}
              onPress={onMessageButtonPress}>
              MESSAGE
            </Button>
          </View>
          <View style={styles.socialsContainer}>
            <ProfileSocial
              style={styles.profileSocial}
              hint='Followers'
              value={`${profile.followers}`}
            />
            <ProfileSocial
              style={styles.profileSocial}
              hint='Following'
              value={`${profile.following}`}
            />
            <ProfileSocial
              style={styles.profileSocial}
              hint='Posts'
              value={`${profile.posts}`}
            />
          </View>
        </ImageOverlay>
        <Text
          style={styles.sectionLabel}
          category='s1'>
          About
        </Text>
        <Text
          style={styles.profileDescription}
          appearance='hint'>
          {profile.description}
        </Text>
        <Text
          style={styles.sectionLabel}
          category='s1'>
          Friends
        </Text>
        <List
          contentContainerStyle={styles.friendsList}
          horizontal={true}
          data={friends}
          renderItem={renderFriendItem}
        />
        <Text
          style={styles.sectionLabel}
          category='s1'>
          Shots
        </Text>
        <List
          data={posts}
          numColumns={3}
          renderItem={renderPostItem}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginVertical: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginVertical: 8,
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 32,
    marginHorizontal: 20,
  },
  profileButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  socialsContainer: {
    flexDirection: 'row',
    width: '75%',
    marginVertical: 8,
  },
  profileSocial: {
    flex: 1,
  },
  sectionLabel: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  profileDescription: {
    marginHorizontal: 16,
  },
  friendsList: {
    marginHorizontal: 8,
  },
  friendItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  friendName: {
    marginTop: 8,
  },
  postItem: {
    flex: 1,
    aspectRatio: 1.0,
  },
});

