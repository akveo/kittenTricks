import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../../assets/images/logo.png')}/>
          <RkText rkType='h1'>Registration</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Name'/>
            <RkTextInput rkType='rounded' placeholder='Email'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
            <RkTextInput rkType='rounded' placeholder='Confirm Password' secureTextEntry={true}/>
            <GradientButton style={styles.save} rkType='large' text='LOGIN' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Already have an account?</RkText>
              <RkButton rkType='clear'>
                <RkText rkType='header6'> Sign in now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.back.base
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

}));