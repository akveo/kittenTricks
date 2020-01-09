import React from 'react';
import { ListRenderItemInfo, StyleSheet as RNStyleSheet, View } from 'react-native';
import { Button, Card, Layout, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ArrowIosBackIcon, HeartIcon, MessageCircleIcon } from './extra/icons';
import { useNavigation, useSafeArea } from './extra/3rd-party';
import { Article } from './extra/data';

const data: Article[] = [
  Article.howToEatHealthy(),
  Article.whyWorkoutImportant(),
  Article.morningWorkouts(),
];

export default (): React.ReactElement => {

  const navigation = useNavigation();
  const safeArea = useSafeArea();

  const onItemPress = (index: number): void => {
    navigation.navigate('Article3');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Article>): React.ReactElement => (
    <Card
      style={styles.item}
      onPress={() => onItemPress(info.index)}>
      <ImageOverlay
        style={styles.itemImage}
        source={info.item.image}>
        <Text
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
            icon={MessageCircleIcon}>
            {`${info.item.comments.length}`}
          </Button>
          <Button
            style={styles.iconButton}
            appearance='ghost'
            status='control'
            icon={HeartIcon}>
            {`${info.item.likes.length}`}
          </Button>
        </View>
      </ImageOverlay>
    </Card>
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
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = RNStyleSheet.create({
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
    height: 220,
  },
  itemImage: {
    ...RNStyleSheet.absoluteFillObject,
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemDescription: {
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

