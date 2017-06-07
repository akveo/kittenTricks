import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import {
  RkStyleSheet,
  RkText
} from 'react-native-ui-kitten';
import {Avatar} from '../../components';
import {Data} from '../../data';
let moment = require('moment');

export class Comments extends React.Component {
  static navigationOptions = {
    title: 'Comments'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let postId = 0;
    this.chats = Data.getComments(postId);
    this.state = {
      data: this.chats
    }
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  _renderSeparator() {
    return (
      <View style={styles.separator}/>
    )
  }

  _renderItem(info) {
    let name = `${info.item.user.firstName} ${info.item.user.lastName}`;
    return (
      <View style={styles.container}>
        <Avatar rkType='circle' style={styles.avatar} img={info.item.user.photo}/>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <RkText rkType='header5'>{name}</RkText>
            <RkText rkType='secondary4 secondaryColor'>
              {moment().add(info.item.time, 'seconds').format('LT')}
            </RkText>
          </View>
          <RkText rkType='primary3 mediumLine'>{info.item.message}</RkText>
        </View>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={this._renderSeparator}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}/>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems:'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border.underline
  }
}));