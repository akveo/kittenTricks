import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  RkText,
  RkButton, RkStyleSheet,
} from 'react-native-ui-kitten';
import {
  Avatar,
  Gallery,
} from '../../components';
import { data } from '../../data';
import { FontIcons } from '../../assets/icons';
import formatNumber from '../../utils/textUtils';

export class ProfileV2 extends React.Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data: data.getUser(),
  };

  render = () => (
    <ScrollView style={styles.root}>
      <View style={[styles.header, styles.bordered]}>
        <View style={styles.row}>
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType='icon circle'>
              <RkText rkType='moon large primary'>{FontIcons.profile}</RkText>
            </RkButton>
          </View>
          <Avatar img={this.state.data.photo} rkType='big' />
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType='icon circle'>
              <RkText rkType='moon large primary'>{FontIcons.mail}</RkText>
            </RkButton>
          </View>
        </View>
        <View style={styles.section}>
          <RkText rkType='header2'>{`${this.state.data.firstName} ${this.state.data.lastName}`}</RkText>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.postCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Posts</RkText>
        </View>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{formatNumber(this.state.data.followersCount)}</RkText>
          <RkText rkType='secondary1 hintColor'>Followers</RkText>
        </View>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.followingCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Following</RkText>
        </View>
      </View>
      <Gallery items={this.state.data.images} />
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
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
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 27.5,
    alignSelf: 'center',
  },
}));
