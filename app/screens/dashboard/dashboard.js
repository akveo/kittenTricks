import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import {
  ProgressChart,
  DoughnutChart,
  AreaChart,
  AreaSmoothedChart,
} from '../../components/';

export class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'.toUpperCase(),
  };

  state = {
    data: {
      statItems: [
        {
          name: 'Stars',
          value: '4,512',
          icon: 'github',
          background: RkTheme.current.colors.dashboard.stars,
        },
        {
          name: 'Tweets',
          value: '2,256',
          icon: 'twitter',
          background: RkTheme.current.colors.dashboard.tweets,
        },
        {
          name: 'Likes',
          value: '1,124',
          icon: 'facebook',
          background: RkTheme.current.colors.dashboard.likes,
        },
      ],
    },
  };

  renderStatItem = (item) => (
    <View style={[styles.statItemContainer, { backgroundColor: item.background }]} key={item.name}>
      <View>
        <RkText rkType='header6' style={styles.statItemValue}>{item.value}</RkText>
        <RkText rkType='secondary7' style={styles.statItemName}>{item.name}</RkText>
      </View>
      <RkText rkType='awesome hero' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
    </View>
  );

  render = () => {
    const chartBackgroundStyle = { backgroundColor: RkTheme.current.colors.control.background };
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.statItems}>
          {this.state.data.statItems.map(this.renderStatItem)}
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <DoughnutChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <ProgressChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaSmoothedChart />
        </View>
      </ScrollView>
    );
  };
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.scroll,
    paddingHorizontal: 15,
  },
  statItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  statItemIcon: {
    alignSelf: 'center',
    marginLeft: 10,
    color: 'white',
  },
  statItemValue: {
    color: 'white',
  },
  statItemName: {
    color: 'white',
  },
  chartBlock: {
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
}));

