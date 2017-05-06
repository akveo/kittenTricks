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
let hdate = require('human-date');

export class Articles2 extends React.Component {
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
      <RkCard rkType='imgBlock' style={styles.card}>
        <Image rkCardImg source={info.item.photo}/>

        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header4 overlayColor'>{info.item.title}</RkText>
          <RkText style={styles.time} rkType='secondary2 overlayColor'>{hdate.relativeTime(info.item.time)}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel={true}/>
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
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  time:{
    marginTop:5
  }
});