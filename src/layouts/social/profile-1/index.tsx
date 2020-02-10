import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Layout, List, Text } from '@ui-kitten/components';
import { ProfileSocial } from './extra/profile-social.component';
import { HeartIcon } from './extra/icons';
import { Post, Profile } from './extra/data';

const profile: Profile = Profile.jenniferGreen();

const posts: Post[] = [
  Post.byJenniferGreen(),
  Post.byAlexaTenorio(),
];

export default ({ navigation }): React.ReactElement => {

  const onFollowButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const renderItemHeader = (info: ListRenderItemInfo<Post>): React.ReactElement => (
    <ImageBackground
      style={styles.postHeader}
      source={info.item.image}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Post>): React.ReactElement => (
    <Card
      style={styles.post}
      header={() => renderItemHeader(info)}>
      <View style={styles.postBody}>
        <Avatar source={info.item.author.photo}/>
        <View style={styles.postAuthorContainer}>
          <Text
            category='s2'>
            {info.item.author.fullName}
          </Text>
          <Text
            appearance='hint'
            category='c1'>
            {info.item.date}
          </Text>
        </View>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='danger'
          icon={HeartIcon}>
          {`${info.item.likes.length}`}
        </Button>
      </View>
    </Card>
  );

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
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
        <View style={styles.profileSocialsContainer}>
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
        <Button
          style={styles.followButton}
          onPress={onFollowButtonPress}>
          FOLLOW
        </Button>
      </View>
    </Layout>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={posts}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  profileSocialsContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  profileSocialContainer: {
    flex: 1,
  },
  followButton: {
    marginVertical: 16,
  },
  post: {
    margin: 8,
  },
  postHeader: {
    height: 220,
  },
  postBody: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  postAuthorContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  iconButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
});

