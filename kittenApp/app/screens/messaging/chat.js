import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  Image
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import _ from 'lodash';
import {KittenTheme} from '../../config/theme';
import {FontAwesome} from '../../assets/icons';
import {KeyboardSpacer} from '../../components/';
let moment = require('moment');

export class Chat extends React.Component {
  static navigationOptions = {
    title: 'Chat'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          type: 'in',
          date: -300,
          text: 'When using Chrome debugging, it runs all the JavaScript code within Chrome itself and communicates with native code via WebSocket. So you are using V8.'
        },
        {
          id: 1,
          date: -240,
          type: 'in',
          text: 'When using React Native, you\'re going to be running your JavaScript code in two environments:'
        },
        {
          id: 2,
          date: -100,
          type: 'out',
          text: 'Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters.'
        },
        {
          id: 3,
          date: -45,
          type: 'out',
          text: 'Here\'s a full list of React Native\'s enabled transformations.'
        },
        {
          id: 4,
          date: -45,
          type: 'out',
          text: 'Here\'s a full list of React Native\'s enabled transformations.'
        }]
    };
    //this.scroll = this._scroll.bind(this);
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    let inMessage = info.item.type === 'in';
    let balloonStyle = inMessage ? styles.balloonIn : styles.balloonOut;
    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;

    let renderDate = (date) => (
      <RkText style={styles.time} rkType='secondary7 secondaryColor'>
        {moment().add(date, 'seconds').format('LT')}
      </RkText>);

    return (
      <View style={[styles.item, itemStyle]}>
        {!inMessage && renderDate(info.item.date)}
        <View style={[styles.balloon, balloonStyle]}>
          <RkText rkType='primary2 mediumLine'>{info.item.text}</RkText>
        </View>
        {inMessage && renderDate(info.item.date)}
      </View>
    )
  }

  _scroll(toEnd) {
    let position = toEnd ? 1 : 0.4;
    let scroll = () => {
      this.refs.list.scrollToIndex(
        {viewPosition: position, index: this.state.data.length - 1});
    };

    if (Platform.OS === 'ios') {
      scroll();
    } else {
      _.delay(scroll, 300);
    }
  }

  _pushMessage() {
    if (!this.state.message)
      return;
    let msg = {
      id: this.state.data.length,
      date: new Date(),
      type: 'out',
      text: this.state.message
    };

    let data = this.state.data;
    data.push(msg);
    this.setState({
      data,
      message: ''
    });
    this._scroll();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList ref='list'
                  extraData={this.state}
                  style={styles.list}
                  data={this.state.data}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}/>
        <View style={styles.footer}>
          <RkButton style={styles.plus} rkType='clear'>
            <RkText rkType='awesome alterColor'>{FontAwesome.plus}</RkText>
          </RkButton>

          <RkTextInput
            onFocus={() => this._scroll()}
            onBlur={() => this._scroll(true)}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
            rkType='row sticker'
            placeholder="Add a comment..."/>

          <RkButton onPress={() => this._pushMessage()} style={styles.send} rkType='circle'>
            <Image source={require('../../assets/icons/sendIcon.png')}/>
          </RkButton>
        </View>
        <KeyboardSpacer/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 17
  },
  footer: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 10,
    backgroundColor: KittenTheme.colors.back.neutral
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row'
  },
  itemIn: {},
  itemOut: {
    alignSelf: 'flex-end'
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  balloonIn: {
    backgroundColor: KittenTheme.colors.back.alternative
  },
  balloonOut: {
    backgroundColor: KittenTheme.colors.back.inactive,
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15
  },
  plus: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 7
  },
  send: {
    width: 40,
    height: 40,
    marginLeft: 10
  }
});