import React from 'react';
import {
  FlatList,
  View,
  Image
} from 'react-native';
import {
  RkCard, RkStyleSheet,
  RkText
} from 'react-native-ui-kitten';
import {Avatar} from '../../components';
import {Data} from '../../data';
let moment = require('moment');

export class Blogposts extends React.Component {
  static navigationOptions = {
    title: 'Blogposts'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.state = {
      data: Data.getPosts()
    }
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <RkCard rkType='blog' style={styles.card}>
        <Image rkCardImg source={info.item.photo}/>
        <View rkCardHeader style={styles.content}>
          <RkText style={styles.section} rkType='header4'>{info.item.title}</RkText>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType='primary3 mediumLine' numberOfLines={2}>{info.item.text}</RkText>
          </View>
        </View>
        <View rkCardFooter>
          <View style={styles.userInfo}>
            <Avatar style={styles.avatar} rkType='circle small' img={info.item.avatar}/>
            <RkText rkType='header6'>{info.item.username}</RkText>
          </View>
          <RkText rkType='secondary2 alterColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText>
        </View>
      </RkCard>
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.container}/>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.back.base
  },
  container: {
    backgroundColor: theme.colors.back.neutral,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 17
  }
}));