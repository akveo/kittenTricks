import React from 'react';
import {
  FlatList,
  View,
  StyleSheet
} from 'react-native';
import _ from 'lodash';
import {
  RkStyleSheet,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import {Avatar} from '../../components';
import {FontAwesome} from '../../assets/icons';
import {Data} from '../../data';
let moment = require('moment');

export class ChatList extends React.Component {
  static navigationOptions = {
    title: 'Chats List'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.chats = Data.getChatList();
    this.renderHeader = this._renderHeader.bind(this);
    this.state = {
      data: this.chats
    }
  }

  _filter(text) {
    let pattern = new RegExp(text, 'i');
    let chats = _.filter(this.chats, (chat) => {

      if (chat.user.firstName.search(pattern) != -1
        || chat.user.lastName.search(pattern) != -1)
        return chat;
    });

    this.setState({data: chats});
  }

  _keyExtractor(item, index) {
    return item.user.id;
  }

  _renderSeparator() {
    return (
      <View style={styles.separator}/>
    )
  }

  _renderHeader() {
    return (
      <View style={styles.searchContainer}>
        <RkTextInput autoCapitalize='none'
                     autoCorrect={false}
                     onChange={(event) => this._filter(event.nativeEvent.text)}
                     label={<RkText rkType='awesome'>{FontAwesome.search}</RkText>}
                     rkType='row'
                     placeholder='Search'/>
      </View>
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
              {moment().add(info.item.date, 'seconds').format('LT')}
            </RkText>
          </View>
          <RkText numberOfLines={2} rkType='primary3 mediumLine'>{info.item.lastMsg}</RkText>
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
        ListHeaderComponent={this.renderHeader}
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
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center'
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row'
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
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base
  }
}));