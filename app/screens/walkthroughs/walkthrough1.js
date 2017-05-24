import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';

export class Walkthrough1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image source={require('../../assets/images/kittenImage.png')}/>
        <RkText style={styles.text}>Welcome to Kitten Pads</RkText>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    marginTop: 20
  }
});