import React from 'react';
import {
  FlatList,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import {InteractionManager} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import _ from 'lodash';
import {FontAwesome} from '../../assets/icons';
import {data} from '../../data';
import {Avatar} from '../../components/avatar';
import {scale} from '../../utils/scale';
let moment = require('moment');


let getUserId = (navigation) => {
  return navigation.state.params ? navigation.state.params.userId : undefined;
};


export class Chat extends React.Component {

  static navigationOptions = ({navigation}) => {
    let renderAvatar = (user) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('ProfileV1', {id: user.id})}>
          <Avatar style={styles.avatar} rkType='small' img={user.photo}/>
        </TouchableOpacity>
      );
    };

    let renderTitle = (user) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('ProfileV1', {id: user.id})}>
          <View style={styles.header}>
            <RkText rkType='header5'>{`${user.firstName} ${user.lastName}`}</RkText>
            <RkText rkType='secondary3 secondaryColor'>Online</RkText>
          </View>
        </TouchableOpacity>
      )
    };


    let user = data.getUser(getUserId(navigation));
    let rightButton = renderAvatar(user);
    let title = renderTitle(user);
    return (
      {
        headerTitle: title,
        headerRight: rightButton
      });
  };

  constructor(props) {
    super(props);
    let conversation = data.getConversation(getUserId(this.props.navigation));

    this.state = {
      data: conversation
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.refs.list.scrollToEnd();
    });
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    let inMessage = info.item.type === 'in';
    let backgroundColor = inMessage
      ? RkTheme.current.colors.chat.messageInBackground
      : RkTheme.current.colors.chat.messageOutBackground;
    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;

    let renderDate = (time) => (
      <RkText style={styles.time} rkType='secondary7 hintColor'>
        {moment().add(time, 'seconds').format('LT')}
      </RkText>);

    return (
      <View style={[styles.item, itemStyle]}>
        {!inMessage && renderDate(info.item.time)}
        <View style={[styles.balloon, {backgroundColor}]}>
          <RkText rkType='primary2 mediumLine chat' style={{paddingTop: 5}}>{info.item.text}</RkText>
        </View>
        {inMessage && renderDate(info.item.time)}
      </View>
    )
  }

  _scroll() {
    if (Platform.OS === 'ios') {
      this.refs.list.scrollToEnd();
    } else {
      _.delay(() => this.refs.list.scrollToEnd(), 100);
    }
  }

  _pushMessage() {
    if (!this.state.message)
      return;

    this.state.data.messages.push({id: this.state.data.messages.length, time: 0, type: 'out', text: this.state.message});
    this.setState({message: ''});
    this._scroll(true);
  }

  render() {
    return (
      <RkAvoidKeyboard style={styles.container} onResponderRelease={(event) => {
        Keyboard.dismiss();
      }}>
        <FlatList ref='list'
                  extraData={this.state}
                  style={styles.list}
                  data={this.state.data.messages}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}/>
        <View style={styles.footer}>
          <RkButton style={styles.plus} rkType='clear'>
            <RkText rkType='awesome secondaryColor'>{FontAwesome.plus}</RkText>
          </RkButton>

          <RkTextInput
            onFocus={() => this._scroll(true)}
            onBlur={() => this._scroll(true)}
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
            rkType='row sticker'
            placeholder="Add a comment..."/>

          <RkButton onPress={() => this._pushMessage()} style={styles.send} rkType='circle highlight'>
            <Image source={require('../../assets/icons/sendIcon.png')}/>
          </RkButton>
        </View>
      </RkAvoidKeyboard>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  header: {
    alignItems: 'center'
  },
  avatar: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  list: {
    paddingHorizontal: 17
  },
  footer: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 10,
    backgroundColor: theme.colors.screen.alter
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
    maxWidth: scale(250),
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
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
    marginLeft: 10,
  }
}));