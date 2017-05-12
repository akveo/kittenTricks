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

export class LoginV2 extends React.Component {
  static navigationOptions = {
    headerVisible: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View behavior='position' style={styles.screen}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../../assets/images/logo.png')}/>
          <RkText rkType='light h1'>React Native</RkText>
          <RkText rkType='logo h0'>UI Kitten</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Username'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
            <GradientButton style={styles.save} rkType='large' text='LOGIN'/>
          </View>
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.google}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero'>{FontAwesome.facebook}</RkText>
            </RkButton>
          </View>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear'>
                <RkText rkType='header6'> Sign up now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent:'space-around'
  },
  image: {
    marginBottom: 10
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

});