import React from 'react';
import { ImageBackground, View } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { ClockIcon, HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  return (
    <Layout
      style={styles.container}
      level='2'>
      <ImageBackground
        style={styles.headerContainer}
        source={data.image}>
        <Avatar
          style={styles.authorPhoto}
          size='large'
          source={data.author.photo}
        />
      </ImageBackground>
      <Layout
        style={styles.contentContainer}
        level='1'>
        <Text
          style={styles.titleLabel}
          category='h5'>
          {data.title}
        </Text>
        <Text>
          {data.content}
        </Text>
      </Layout>
      <Divider/>
      <View style={styles.activityContainer}>
        <ClockIcon/>
        <Text
          style={styles.dateLabel}
          appearance='hint'
          category='c1'>
          {data.date}
        </Text>
        <Button
          style={styles.reactionButton}
          appearance='ghost'
          status='basic'
          accessoryLeft={MessageCircleIcon}>
          {`${data.comments.length}`}
        </Button>
        <Button
          style={styles.reactionButton}
          appearance='ghost'
          status='danger'
          accessoryLeft={HeartIcon}>
          {`${data.likes.length}`}
        </Button>
      </View>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 192,
    zIndex: 1,
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -24,
    borderWidth: 2,
    borderColor: 'border-basic-color-2',
  },
  titleLabel: {
    marginTop: 48,
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  dateIcon: {
    width: 24,
    height: 24,
    tintColor: 'text-hint-color',
  },
  dateLabel: {
    flex: 1,
    marginHorizontal: 8,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  reactionButton: {
    paddingHorizontal: 0,
  },
});
