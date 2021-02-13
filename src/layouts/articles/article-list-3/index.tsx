import React from 'react';
import { ListRenderItemInfo, StyleSheet as RNStyleSheet, View } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';

const data: Article[] = [
  Article.howToEatHealthy(),
  Article.whyWorkoutImportant(),
  Article.morningWorkouts(),
];

export default ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('Article3');
  };

  const renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <Card
      style={styles.item}
      onPress={() => onItemPress(info.index)}>
      <ImageOverlay
        style={styles.itemImage}
        source={info.item.image}>
        <Text
          style={styles.itemTitle}
          category='h2'
          status='control'>
          {info.item.title}
        </Text>
        <Text
          style={styles.itemDescription}
          category='s1'
          status='control'>
          {info.item.description}
        </Text>
        <View style={styles.itemFooter}>
          <Button
            style={styles.iconButton}
            appearance='ghost'
            status='control'
            accessoryLeft={MessageCircleIcon}>
            {`${info.item.comments.length}`}
          </Button>
          <Button
            style={styles.iconButton}
            appearance='ghost'
            status='control'
            accessoryLeft={HeartIcon}>
            {`${info.item.likes.length}`}
          </Button>
        </View>
      </ImageOverlay>
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

const styles = RNStyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    height: 220,
  },
  itemImage: {
    ...RNStyleSheet.absoluteFillObject,
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescription: {
    zIndex: 1,
    marginVertical: 16,
  },
  itemFooter: {
    position: 'absolute',
    flexDirection: 'row',
    left: 8,
    bottom: 8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});

