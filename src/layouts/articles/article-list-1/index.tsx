import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Layout, List, Text } from '@ui-kitten/components';
import { HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';

const data: Article[] = [
  Article.howToEatHealthy(),
  Article.morningWorkouts(),
  Article.whyWorkoutImportant(),
];

export default ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('Article1');
  };

  const renderItemHeader = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderItemFooter = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <View style={styles.itemFooter}>
      <Avatar source={info.item.author.photo}/>
      <View style={styles.itemAuthoringContainer}>
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
        status='basic'
        icon={MessageCircleIcon}>
        {`${info.item.comments.length}`}
      </Button>
      <Button
        style={styles.iconButton}
        appearance='ghost'
        status='danger'
        icon={HeartIcon}>
        {`${info.item.likes.length}`}
      </Button>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}>
      <Text category='h5'>
        {info.item.title}
      </Text>
      <Text
        style={styles.itemContent}
        appearance='hint'
        category='s1'>
        {`${info.item.content.substring(0, 82)}...`}
      </Text>
    </Card>
  );

  return (
    <Layout
      style={styles.container}
      level='2'>
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    height: 220,
  },
  itemContent: {
    marginVertical: 8,
  },
  itemFooter: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemAuthoringContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

