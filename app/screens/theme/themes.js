import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {RkText, RkButton, RkTheme} from 'react-native-ui-kitten';
import {DarkKittenTheme} from '../../config/darkTheme';
import {KittenTheme} from '../../config/theme';

let baseTheme = 'base';
let nightTheme = 'night';

export class Themes extends React.Component {
  static navigationOptions = {
    title: ''
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <RkButton onPress={() => {
          RkTheme.setTheme(DarkKittenTheme);
        }}>
          Night
        </RkButton>

        <RkButton onPress={() => {
          RkTheme.setTheme(KittenTheme);
        }}> Kitten </RkButton>
      </View>

    )
  }
}

let styles = StyleSheet.create({});