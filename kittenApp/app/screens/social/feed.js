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

export class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = [
      {key: 1},
      {key: 2}
    ];
  }

  renderItem(info) {
    return (
      <RkCard style={styles.card}>
        <View rkCardHeader>
          <Avatar rkType='small'
                  style={styles.avatar}
                  img={require('../../data/img/photo32.jpg')}/>
          <View>
            <RkText rkType='primary1'>Vasiliy Sivoy</RkText>
            <RkText rkType='secondary2 alterColor'>2 min ago</RkText>
          </View>
        </View>
        <Image rkCardImg source={require('../../data/img/photo17.png')}/>
        <View rkCardContent>
          <RkText rkType='primary5'>
            I have got a cat. Her name is Matilda. She is quite old for a cat. Matilda is very
            fluffy. She has big eyes. Her eyes are light green, but they become yellow in bright sunlight.
          </RkText>
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
                renderItem={this.renderItem}
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
  card:{
    marginVertical: 8,
  },
  avatar: {
    marginRight: 16
  }
});