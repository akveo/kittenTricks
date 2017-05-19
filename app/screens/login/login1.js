import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/';

export class LoginV1 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let contentHeight = 375;
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    return (
      <RkAvoidKeyboard style={styles.screen}>
        <Image style={[styles.image, {height, width}]} source={require('../../assets/images/background.png')}/>
        <View style={styles.container}>
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero accentColor'>{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero accentColor'>{FontAwesome.google}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType='social'>
              <RkText rkType='awesome hero accentColor'>{FontAwesome.facebook}</RkText>
            </RkButton>
          </View>
          <RkTextInput rkType='rounded' placeholder='Username'/>
          <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
          <GradientButton onPress={()=>{
            this.props.navigation.goBack()
          }} rkType='large' style={styles.save} text='LOGIN'/>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear'>
                <RkText rkType='header6'> Sign up now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: 22,
    alignItems: 'center',
    flex: -1
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24
  },
  button: {
    marginHorizontal: 14
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  save: {

  }
});