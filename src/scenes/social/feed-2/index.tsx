import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, Layout, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { ArrowIosBackIcon, HeartIcon, PlusIcon, ShareIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Training } from './extra/data';

const data: Training[] = [
  Training.basketball(),
  Training.running(),
  Training.workout(),
];

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderItemHeader = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.photo}>
      <Text
        style={styles.itemTitle}
        category='h4'
        status='control'>
        {info.item.title}
      </Text>
    </ImageOverlay>
  );

  const renderItemFooter = (): React.ReactElement => (
    <View style={styles.itemFooter}>
      <View style={styles.itemReactionsContainer}>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='basic'
          icon={ShareIcon}/>
        <Button
          style={styles.iconButton}
          appearance='ghost'
          status='danger'
          icon={HeartIcon}
        />
      </View>
      <Button
        style={styles.itemAddButton}
        appearance='ghost'
        icon={PlusIcon}>
        Add Training
      </Button>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      footer={renderItemFooter}>
      <Text
        style={styles.itemDescription}
        category='s1'>
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Feed'
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
    minHeight: 220,
  },
  itemTitle: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  itemDescription: {
    marginHorizontal: -8,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemReactionsContainer: {
    flexDirection: 'row',
  },
  itemAddButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
