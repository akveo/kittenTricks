import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components';
import { data } from '../../data';

const moment = require('moment');

export class Blogposts extends React.Component {
  static navigationOptions = {
    title: 'Blogposts'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = (item) => item.id;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Article', { id: item.item.id });
  };

  renderItem = (item) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <RkCard rkType='blog' style={styles.card}>
        <Image rkCardImg source={item.item.photo} />
        <View rkCardHeader style={styles.content}>
          <RkText style={styles.section} rkType='header4'>{item.item.title}</RkText>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType='primary3 mediumLine' numberOfLines={2}>{item.item.text}</RkText>
          </View>
        </View>
        <View rkCardFooter>
          <View style={styles.userInfo}>
            <Avatar style={styles.avatar} rkType='circle small' img={item.item.user.photo} />
            <RkText rkType='header6'>{`${item.item.user.firstName} ${item.item.user.lastName}`}</RkText>
          </View>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.item.time, 'seconds').fromNow()}</RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={styles.container}
    />
  );
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 17,
  },
}));
