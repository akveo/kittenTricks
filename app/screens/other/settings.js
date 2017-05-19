import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText
} from 'react-native-ui-kitten';
import {Colors, KittenTheme} from '../../config/theme';
import {RkSwitch, FindFriends} from '../../components';
import {FontAwesome} from '../../assets/icons';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.state = {
      sendPush: true,
      shouldRefresh: false,
      twitterEnabled: true,
      googleEnabled: false,
      facebookEnabled: true
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>PROFILE SETTINGS</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Edit Profile</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Change Password</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <RkText rkType='header6'>Send Push Notifications</RkText>
            <RkSwitch style={styles.switch}
                      value={this.state.sendPush} onValueChange={(sendPush) => this.setState({sendPush})}/>
          </View>
          <View style={styles.row}>
            <RkText rkType='header6'>Send Push Notifications</RkText>
            <RkSwitch style={styles.switch}
                      value={this.state.shouldRefresh}
                      onValueChange={(shouldRefresh) => this.setState({shouldRefresh})}/>
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>FIND FRIENDS</RkText>
          </View>
          <View style={styles.row}>
            <FindFriends color={Colors.twitter} text='Twitter' icon={FontAwesome.twitter}
                         selected={this.state.twitterEnabled}
                         onPress={() => {
                           this.setState({twitterEnabled: !this.state.twitterEnabled})
                         }}/>
          </View>
          <View style={styles.row}>
            <FindFriends color={Colors.google} text='Google' icon={FontAwesome.google}
                         selected={this.state.googleEnabled} onPress={() => {
              this.setState({googleEnabled: !this.state.googleEnabled})
            }}/>
          </View>
          <View style={styles.row}>
            <FindFriends color={Colors.facebook} text='Facebook' icon={FontAwesome.facebook}
                         selected={this.state.facebookEnabled} onPress={() => {
              this.setState({facebookEnabled: !this.state.facebookEnabled})
            }}/>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Edit Profile</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Edit Profile</RkText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>SUPPORT</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Help</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Privacy Policy</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Terms & Conditions</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>Logout</RkText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  header: {
    backgroundColor: KittenTheme.colors.back.neutral,
    paddingVertical: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline,
    alignItems: 'center'
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24
  },
  switch: {
    marginVertical: 14
  },
});