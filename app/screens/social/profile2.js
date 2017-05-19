import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkButton
} from 'react-native-ui-kitten';
import {KittenTheme} from '../../config/theme';
import {Avatar} from '../../components/avatar';
import {Gallery} from '../../components/gallery';
import {Users} from '../../data/appData';
import {FontIcons} from '../../assets/icons';

export class ProfileV2 extends React.Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.user = Users[0];
  }

  render() {
    let name = `${this.user.firstName} ${this.user.lastName}`;
    return (
      <ScrollView>
        <View style={[styles.header, styles.bordered]}>
          <View style={styles.row}>
            <View style={styles.buttons}>
              <RkButton style={styles.button} rkType='icon circle'>
                <RkText rkType='moon large primary'>{FontIcons.profile}</RkText>
              </RkButton>
            </View>
            <Avatar img={this.user.photo} rkType='big'/>
            <View style={styles.buttons}>
              <RkButton style={styles.button} rkType='icon circle'>
                <RkText rkType='moon large primary'>{FontIcons.mail}</RkText>
              </RkButton>
            </View>
          </View>
          <View style={styles.section}>
            <RkText rkType='header2'>{name}</RkText>
          </View>
        </View>
        <View style={styles.userInfo}>
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
        <Gallery items={this.user.images}/>
      </ScrollView>
    )
  }
}


let styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 17,
  },
  row: {
    flexDirection: 'row',

  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3
  },
  separator: {
    backgroundColor: KittenTheme.colors.border.underline,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flex: 1
  },
  button: {
    marginTop: 27.5,
    alignSelf: 'center'
  }
});