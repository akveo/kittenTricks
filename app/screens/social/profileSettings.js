import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialSetting} from '../../components';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components';

export class ProfileSettings extends React.Component {
  static navigationOptions = {
    title: 'Profile Settings'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.user = data.getUser();

    this.state = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      country: this.user.country,
      phone: this.user.phone,
      password: this.user.password,
      newPassword: this.user.newPassword,
      confirmPassword: this.user.confirmPassword,
      twitter: true,
      google: false,
      facebook: false
    }
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkAvoidKeyboard>
          <View style={styles.header}>
            <Avatar img={this.user.photo} rkType='big'/>
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='header6 primary'>INFO</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='First Name'
                           value={this.state.firstName}
                           rkType='right clear'
                           onChangeText={(text) => this.setState({firstName: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Last Name'
                           value={this.state.lastName}
                           onChangeText={(text) => this.setState({lastName: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Email'
                           value={this.state.email}
                           onChangeText={(text) => this.setState({email: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Country'
                           value={this.state.country}
                           onChangeText={(text) => this.setState({country: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Phone'
                           value={this.state.phone}
                           onChangeText={(text) => this.setState({phone: text})}
                           rkType='right clear'/>
            </View>

          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='primary header6'>CHANGE PASSWORD</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Old Password'
                           value={this.state.password}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({password: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='New Password'
                           value={this.state.newPassword}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({newPassword: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Confirm Password'
                           value={this.state.confirmPassword}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({confirmPassword: text})}/>
            </View>
          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='primary header6'>CONNECT YOUR ACCOUNT</RkText>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Twitter' icon={FontAwesome.twitter} tintColor={RkTheme.current.colors.twitter}/>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Google' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google}/>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Facebook' icon={FontAwesome.facebook} tintColor={RkTheme.current.colors.facebook}/>
            </View>
          </View>
          <GradientButton rkType='large' style={styles.button} text='SAVE'/>
        </RkAvoidKeyboard>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
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
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }
}));