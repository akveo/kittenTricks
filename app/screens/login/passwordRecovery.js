import React from 'react';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkTheme
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';

export class PasswordRecovery extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
    };

    return (
      <View behavior='position'
            style={styles.screen}
            onStartShouldSetResponder={ (e) => true}
            onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType='h1'>Password Recovery</RkText>
        </View>
        <View style={styles.content}>
          <RkTextInput rkType='rounded' placeholder='Email'/>
          <RkText rkType='secondary5 secondaryColor center'>
            Enter your email below to receive your password reset instructions
          </RkText>
        </View>
        <GradientButton style={styles.save} rkType='large' text='SEND' onPress={() => {
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
    paddingVertical: scaleVertical(24),
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  header: {
    alignItems: 'center'
  },
  image: {
    marginVertical: scaleVertical(27),
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  content: {
    alignItems: 'center'
  }
}));