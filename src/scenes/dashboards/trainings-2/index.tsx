import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, Layout, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ActivityIcon, ArrowIosBackIcon, ClockIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Training } from './extra/data';

const trainings: Training[] = [
  Training.workoutForWomen(),
  Training.groupWorkout(),
  Training.gymnastics(),
  Training.groupWorkout(),
  Training.gymnastics(),
  Training.workoutForWomen(),
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
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}>
      <Text category='h4'>{info.item.title}</Text>
      <View style={styles.itemFooter}>
        <Button
          style={styles.activityButton}
          appearance='ghost'
          size='tiny'
          icon={ClockIcon}>
          {info.item.formattedDuration}
        </Button>
        <Button
          style={styles.activityButton}
          appearance='ghost'
          size='tiny'
          status='danger'
          icon={ActivityIcon}>
          {info.item.formattedKcal}
        </Button>
      </View>
    </Card>
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Trainings'
        leftControl={renderBackAction()}
      />
      <List
        style={styles.list}
        data={trainings}
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
  item: {
    borderRadius: 0,
    marginVertical: 8,
  },
  itemHeader: {
    height: 160,
  },
  itemFooter: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: -4,
  },
  activityButton: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
});
