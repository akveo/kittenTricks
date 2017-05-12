import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export class PasswordRecovery extends React.Component {
  static navigationOptions = {
    headerVisible: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View behavior='position' style={styles.screen}>
        <View style={styles.header}>
          <Image style={styles.image} source={require('../../assets/images/logo.png')}/>
          <RkText rkType='h1'>Password Recovery</RkText>
        </View>
        <View style={styles.content}>
          <RkTextInput rkType='rounded' placeholder='Email'/>
          <RkText rkType='secondary5 secondaryColor center'>
            Enter your email below to receive your password reset instructions
          </RkText>
        </View>
        <GradientButton style={styles.save} rkType='large' text='LOGIN'/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'space-between'
  },
  header: {
    alignItems: 'center'
  },
  image: {
    marginVertical: 27
  },
  content: {
    alignItems: 'center'
  }
});