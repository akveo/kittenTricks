import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import {
  RkStyleSheet,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import {Avatar} from '../../components';
import {FontAwesome} from '../../assets/icons';
import {data} from '../../data';
let moment = require('moment');

export class ChatList extends React.Component {
  static navigationOptions = {
    title: 'Chats List'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.renderHeader = this._renderHeader.bind(this);
    this.renderItem = this._renderItem.bind(this);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.chats = data.getChatList();
    this.setState({
      data: this.chats
    });
  }

  _filter(text) {
    let pattern = new RegExp(text, 'i');
    let chats = _.filter(this.chats, (chat) => {

      if (chat.withUser.firstName.search(pattern) != -1
        || chat.withUser.lastName.search(pattern) != -1)
        return chat;
    });

    this.setState({data: chats});
  }

  _keyExtractor(item, index) {
    return item.withUser.id;
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
    let name = `${info.item.withUser.firstName} ${info.item.withUser.lastName}`;
    let last = info.item.messages[info.item.messages.length - 1];
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', {userId: info.item.withUser.id})}>
        <View style={styles.container}>
          <Avatar rkType='circle' style={styles.avatar} img={info.item.withUser.photo}/>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <RkText rkType='header5'>{name}</RkText>
              <RkText rkType='secondary4 hintColor'>
                {moment().add(last.time, 'seconds').format('LT')}
              </RkText>
            </View>
            <RkText numberOfLines={2} rkType='primary3 mediumLine' style={{paddingTop: 5}}>{last.text}</RkText>
          </View>
        </View>
      </TouchableOpacity>
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
        renderItem={this.renderItem}/>
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
    paddingBottom: 12,
    paddingTop: 7,
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