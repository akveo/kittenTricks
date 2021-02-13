import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';
import { ActivityIcon, ClockIcon } from './extra/icons';
import { Training } from './extra/data';

const trainings: Training[] = [
  Training.workoutForWomen(),
  Training.groupWorkout(),
  Training.gymnastics(),
  Training.groupWorkout(),
  Training.gymnastics(),
  Training.workoutForWomen(),
];

export default (): React.ReactElement => {

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
          accessoryLeft={ClockIcon}>
          {info.item.formattedDuration}
        </Button>
        <Button
          style={styles.activityButton}
          appearance='ghost'
          size='tiny'
          status='danger'
          accessoryLeft={ActivityIcon}>
          {info.item.formattedKcal}
        </Button>
      </View>
    </Card>
  );

  return (
    <List
      style={styles.list}
      data={trainings}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
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
