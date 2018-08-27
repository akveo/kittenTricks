import React from 'react';
import {
  FlatList,
  View,
  Image,
} from 'react-native';
import {
  RkCard,
  RkText, RkStyleSheet,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components/avatar';
import { SocialBar } from '../../components/socialBar';
import { data } from '../../data';

const moment = require('moment');

export class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => (
    <RkCard style={styles.card}>
      <View rkCardHeader>
        <Avatar
          rkType='small'
          style={styles.avatar}
          img={item.user.photo}
        />
        <View>
          <RkText rkType='header4'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
        </View>
      </View>
      <Image rkCardImg source={item.photo} />
      <View rkCardContent>
        <RkText rkType='primary3'>{item.text}</RkText>
      </View>
      <View rkCardFooter>
        <SocialBar />
      </View >
    </RkCard>
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

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  card: {
    marginVertical: 8,
  },
  avatar: {
    marginRight: 16,
  },
}));
