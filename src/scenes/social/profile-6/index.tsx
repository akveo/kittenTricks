import React from 'react';
import { ImageBackground, ListRenderItemInfo, ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ProfileSocial } from './extra/profile-social.component';
import { CategoryList } from './extra/category-list.component';
import { ArrowIosBackIcon, MessageCircleIcon, PersonAddIcon, PinIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Post, Profile } from './extra/data';

const profile: Profile = Profile.helenKuper();

const plantPosts: Post[] = [
  Post.plant1(),
  Post.plant2(),
  Post.plant3(),
];

const travelPosts: Post[] = [
  Post.travel1(),
  Post.travel2(),
  Post.travel3(),
];

const stylePosts: Post[] = [
  Post.style1(),
  Post.style2(),
  Post.style3(),
];

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();

  const onFollowButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onMessageButtonPress = (): void => {
    navigation && navigation.navigate('Chat1');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
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
      <Divider/>
      <ScrollView style={styles.contentContainer}>
        <Layout style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.profileDetailsContainer}>
              <Text category='h4'>
                {profile.fullName}
              </Text>
              <View style={styles.profileLocationContainer}>
                <PinIcon/>
                <Text
                  style={styles.profileLocation}
                  appearance='hint'
                  category='s1'>
                  {profile.location}
                </Text>
              </View>
            </View>
            <Avatar
              style={styles.profileAvatar}
              size='large'
              source={profile.photo}
            />
          </View>
          <View style={styles.profileButtonsContainer}>
            <Button
              style={styles.profileButton}
              icon={PersonAddIcon}
              onPress={onFollowButtonPress}>
              FOLLOW
            </Button>
            <Button
              appearance='outline'
              style={styles.profileButton}
              icon={MessageCircleIcon}
              onPress={onMessageButtonPress}>
              MESSAGE
            </Button>
          </View>
          <Divider style={styles.profileSocialsDivider}/>
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
        </Layout>
        <CategoryList
          contentContainerStyle={styles.postsList}
          hint='Plants'
          data={[...plantPosts, ...plantPosts]}
          renderItem={renderPostItem}
        />
        <CategoryList
          contentContainerStyle={styles.postsList}
          hint='Travel'
          data={[...travelPosts, ...travelPosts]}
          renderItem={renderPostItem}
        />
        <CategoryList
          contentContainerStyle={styles.postsList}
          hint='Style'
          data={[...stylePosts, ...stylePosts]}
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
  contentContainer: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  profileLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileLocation: {
    marginHorizontal: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  profileButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  profileSocialsDivider: {
    marginHorizontal: -16,
  },
  profileSocialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
    marginBottom: 8,
  },
  postsList: {
    paddingHorizontal: 8,
  },
  postItem: {
    width: 144,
    height: 144,
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
});
