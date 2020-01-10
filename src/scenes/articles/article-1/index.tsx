import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ArrowIosBackIcon, HeartIcon, MessageCircleIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();

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
        title='Blog'
        alignment='center'
        leftControl={renderBackAction()}
      />
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
      <Text style={styles.contentLabel}>
        {data.content}
      </Text>
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
};

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
  contentLabel: {
    flex: 1,
    margin: 24,
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

