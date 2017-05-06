import React from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet
} from 'react-native';
import {
  RkCard,
  RkButton,
  RkText
} from 'react-native-ui-kitten';
import {KittenTheme} from '../../config/theme';
import {Avatar} from '../../components/avatar';
import {SocialBar} from '../../components/socialBar';
import {Data} from '../../data';
let hdate = require('human-date');

export class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = Data.getPosts();
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <RkCard style={styles.card}>
        <View rkCardHeader>
          <Avatar rkType='small'
                  style={styles.avatar}
                  img={info.item.avatar}/>
          <View>
            <RkText rkType='header4'>{info.item.username}</RkText>
            <RkText rkType='secondary2 alterColor'>{hdate.relativeTime(info.item.time)}</RkText>
          </View>
        </View>
        <Image rkCardImg source={info.item.photo}/>
        <View rkCardContent>
          <RkText rkType='primary3'>{info.item.text}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar/>
        </View >
      </RkCard>
    )
  }

  render() {
    return (
      <FlatList data={this.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}/>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: KittenTheme.colors.back.neutral,
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  card: {
    marginVertical: 8,
  },
  avatar: {
    marginRight: 16
  }
});