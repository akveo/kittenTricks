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


export class Articles3 extends React.Component {
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

  _renderItem(info){
    return(
      <RkCard style={styles.card}>
        <View rkCardHeader>
          <View>
            <RkText rkType='primary1'>{info.item.title}</RkText>
            <RkText rkType='secondary2 alterColor'>{hdate.relativeTime(info.item.time)}</RkText>
          </View>
        </View>
        <Image rkCardImg source={info.item.photo}/>
        <View style={styles.footer} rkCardFooter>
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
    paddingHorizontal:14,
    paddingVertical:8
  },
  card:{
    marginVertical:8
  },
  footer:{
    paddingTop:16
  }
});