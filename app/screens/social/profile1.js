import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  RkText,
  RkButton, RkStyleSheet
} from 'react-native-ui-kitten';
import {Avatar} from '../../components/avatar';
import {Gallery} from '../../components/gallery';
import {Data} from '../../data/';

export class ProfileV1 extends React.Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.user = Data.getUser(1);
  }

  render() {
    let name = `${this.user.firstName} ${this.user.lastName}`;
    return (
      <ScrollView style={styles.root}>
        <View style={[styles.header, styles.bordered]}>
          <Avatar img={this.user.photo} rkType='big'/>
          <RkText rkType='header2'>{name}</RkText>
        </View>
        <View style={[styles.userInfo, styles.bordered]}>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{this.user.postCount}</RkText>
            <RkText rkType='secondary1 secondaryColor'>Posts</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{this.user.followersCount}</RkText>
            <RkText rkType='secondary1 secondaryColor'>Followers</RkText>
          </View>
          <View style={styles.section}>
            <RkText rkType='header3' style={styles.space}>{this.user.followingCount}</RkText>
            <RkText rkType='secondary1 secondaryColor'>Following</RkText>
          </View>
        </View>
        <View style={styles.buttons}>
          <RkButton style={styles.button} rkType='clear link'>FOLLOW</RkButton>
          <View style={styles.separator}/>
          <RkButton style={styles.button} rkType='clear link'>MESSAGE</RkButton>
        </View>
        <Gallery items={this.user.images}/>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root:{
    backgroundColor:theme.colors.back.base
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.underline
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3
  },
  separator: {
    backgroundColor: theme.colors.border.underline,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center'
  }
}));