import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  RkCard,
  RkButton,
  RkText
} from 'react-native-ui-kitten';
import {Data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
let hdate = require('human-date');


export class Article extends React.Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = Data.getPosts()[0];
  }

  render() {
    return (
      <ScrollView>
        <RkCard rkType='article'>
          <Image rkCardImg source={this.data.photo}/>
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.title}</RkText>
              <RkText rkType='secondary2 alterColor'>{hdate.relativeTime(this.data.time)}</RkText>
            </View>
            <Avatar rkType='circle' img={this.data.avatar}/>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View rkCardFooter>
            <SocialBar/>
          </View>
        </RkCard>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  title: {
    marginBottom: 5
  },
});