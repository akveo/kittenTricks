import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { BulbIcon, HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';

const data: Article[] = [
  Article.howToEatHealthy(),
  Article.whyWorkoutImportant(),
  Article.morningWorkouts(),
];

export default ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('Article2');
  };

  const renderItemHeader = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.image}>
      <Text
        style={styles.itemTitle}
        category='h2'
        status='control'>
        {info.item.title}
      </Text>
      <View style={styles.itemDescriptionContainer}>
        <BulbIcon/>
        <Text
          style={styles.itemDescription}
          category='s1'
          status='control'>
          {info.item.description}
        </Text>
      </View>
    </ImageOverlay>
  );

  const renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      onPress={() => onItemPress(info.index)}>
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
    </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  itemDescription: {
    marginHorizontal: 16,
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

