import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';

export class PasswordRecovery extends React.Component {
  static navigationOptions = {
    header: null
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
        <GradientButton style={styles.save} rkType='large' text='LOGIN' onPress={() => {
          this.props.navigation.goBack()
        }}/>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.back.base
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
}));