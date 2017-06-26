import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {data} from '../../data';
let moment = require('moment');

export class Articles1 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = data.getArticles();
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Article', {id: info.item.id})}>
        <RkCard rkType='backImg'>
          <Image rkCardImg source={info.item.photo}/>
          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header2 inverseColor'>{info.item.header}</RkText>
            <RkText rkType='secondary2 inverseColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText>
            <View rkCardFooter style={styles.footer}>
              <SocialBar rkType='leftAligned'/>
            </View >
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }

  render() {
    let info = {};
    info.item = this.data[0];
    return (
      <FlatList data={this.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.root}/>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240
  }
}));