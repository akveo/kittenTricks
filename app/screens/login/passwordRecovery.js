import React from 'react';
import {
  View,
  Image,
  Keyboard,
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkTheme,
} from 'react-native-ui-kitten';
import { GradientButton } from '../../components/';
import { scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

export class PasswordRecovery extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    header: null,
  };

  onSendButtonPressed = () => {
    this.props.navigation.goBack();
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/logo.png') : require('../../assets/images/logoDark.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  render = () => (
    <View
      behavior='position'
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={styles.header}>
        {this.renderImage()}
        <RkText rkType='h1'>Password Recovery</RkText>
      </View>
      <View style={styles.content}>
        <RkTextInput rkType='rounded' placeholder='Email' />
        <RkText rkType='secondary5 secondaryColor center'>
            Enter your email below to receive your password reset instructions
        </RkText>
      </View>
      <GradientButton
        style={styles.save}
        rkType='large'
        text='SEND'
        onPress={this.onSendButtonPressed}
      />
    </View>
  );
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: scaleVertical(24),
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    marginVertical: scaleVertical(27),
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
  },
}));
