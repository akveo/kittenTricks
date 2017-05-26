import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

export class PasswordTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true}
  }

  render() {

    let button = (
      <RkButton style={styles.button} rkType='clear'
                onPress={() => {
                  this.setState({hidden: !this.state.hidden})
                }}>
        <Image source={require('../assets/icons/eyeIcon.png')}/>
      </RkButton>
    );

    return (
      <RkTextInput
        autoCapitalize='none'
        rkType='bordered rounded iconRight'
        autoCorrect={false}
        label={button}
        secureTextEntry={this.state.hidden}/>
    )
  }
}

let styles = StyleSheet.create({
  button: {
    right: 17
  }
});