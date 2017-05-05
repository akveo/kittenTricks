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
let hdate = require('human-date');

export class Articles1 extends React.Component {
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
      <RkCard rkType='backImg'>
        <Image rkCardImg source={info.item.photo}/>
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header2 overlayColor'>{info.item.title}</RkText>
          <RkText rkType='secondary2 overlayColor'>{hdate.relativeTime(info.item.time)}</RkText>
          <View rkCardFooter style={styles.footer}>
            <SocialBar rkType='leftAligned'/>
          </View >
        </View>
      </RkCard>
    )
  }

  render() {
    let info = {};
    info.item = this.data[0];
    return (
      <FlatList data={this.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}/>

    )
  }
}

let styles = StyleSheet.create({
  container: {},
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240
  }
});