import React from 'react';
import { ImageBackground, ListRenderItemInfo, ScrollView, View } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { ProfileSocial } from './extra/profile-social.component';
import { CategoryList } from './extra/category-list.component';
import { MessageCircleIcon, PersonAddIcon, PinIcon } from './extra/icons';
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

  const styles = useStyleSheet(themedStyle);

  const onFollowButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onMessageButtonPress = (): void => {
    navigation && navigation.navigate('Chat1');
  };

  const renderPostItem = (info: ListRenderItemInfo<Post>): React.ReactElement => (
    <ImageBackground
      style={styles.postItem}
      source={info.item.photo}
    />
  );

  return (
    <ScrollView style={styles.contentContainer}>
      <Layout
        style={styles.header}
        level='1'>
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
            accessoryLeft={PersonAddIcon}
            onPress={onFollowButtonPress}>
            FOLLOW
          </Button>
          <Button
            appearance='outline'
            style={styles.profileButton}
            accessoryLeft={MessageCircleIcon}
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
  );
};

const themedStyle = StyleService.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
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
