import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';

export class Walkthrough2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image source={require('../../assets/images/screensImage.png')}/>
        <RkText style={styles.text}>Explore different examples of frequently used pages</RkText>
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
    textAlign:'center',
    marginTop: 20,
    marginHorizontal: 50
  }
});