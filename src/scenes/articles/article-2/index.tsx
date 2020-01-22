import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Avatar, Button, Divider, Layout, StyleService, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { ArrowIosBackIcon, ClockIcon, HeartIcon, MessageCircleIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Article } from './extra/data';

const data: Article = Article.howToEatHealthy();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const styles = useStyleSheet(themedStyles);

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
      <ImageBackground
        style={styles.headerContainer}
        source={data.image}>
        <Avatar
          style={styles.authorPhoto}
          size='large'
          source={data.author.photo}
        />
      </ImageBackground>
      <Text
        style={styles.titleLabel}
        category='h5'>
        {data.title}
      </Text>
      <Text style={styles.contentLabel}>
        {data.content}
      </Text>
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
          icon={MessageCircleIcon}>
          {`${data.comments.length}`}
        </Button>
        <Button
          style={styles.reactionButton}
          appearance='ghost'
          status='danger'
          icon={HeartIcon}>
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
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -24,
    borderWidth: 2,
    borderColor: 'border-basic-color-2',
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 48,
  },
  contentLabel: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 24,
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
