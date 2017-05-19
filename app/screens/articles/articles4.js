import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  RkText,
  RkCard
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {Data} from '../../data';
import {KittenTheme} from '../../config/theme';
let moment = require('moment');

export class Articles4 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase()
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
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={info.item.photo}/>

        <View rkCardContent>
          <RkText numberOfLines={1} rkType='header6'>{info.item.title}</RkText>
          <RkText rkType='secondary6 alterColor'>{info.item.username}</RkText>
          <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{info.item.text}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel={true}/>
        </View >
      </RkCard>
    )
  }

  render() {
    return (
      <View>
        <FlatList data={this.data}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
                  style={styles.container}/>
      </View>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    backgroundColor: KittenTheme.colors.back.neutral,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  post:{
    marginTop:13
  }
});