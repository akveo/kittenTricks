import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Layout, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

export default (): React.ReactElement => (
  <Layout style={styles.container}>
    <ImageOverlay
      style={styles.headerContainer}
      source={data.image}>
      <Text
        style={styles.headerTitle}
        category='h1'
        status='control'>
        {data.title}
      </Text>
      <Text
        style={styles.headerDescription}
        category='s1'
        status='control'>
        {data.description}
      </Text>
    </ImageOverlay>
    <Layout
      style={styles.contentContainer}
      level='1'>
      <Text>
        {data.content}
      </Text>
    </Layout>
    <Divider/>
    <View style={styles.activityContainer}>
      <Avatar source={data.author.photo}/>
      <View style={styles.authoringInfoContainer}>
        <Text>
          {data.author.fullName}
        </Text>
        <Text
          appearance='hint'
          category='p2'>
          {data.date}
        </Text>
      </View>
      <Button
        style={styles.iconButton}
        appearance='ghost'
        status='basic'
        icon={MessageCircleIcon}>
        {`${data.comments.length}`}
      </Button>
      <Button
        style={styles.iconButton}
        appearance='ghost'
        status='danger'
        icon={HeartIcon}>
        {`${data.likes.length}`}
      </Button>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    minHeight: 256,
    paddingVertical: 24,
  },
  headerTitle: {
    textAlign: 'center',
    marginVertical: 24,
    zIndex: 1,
  },
  headerDescription: {
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  authoringInfoContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});

