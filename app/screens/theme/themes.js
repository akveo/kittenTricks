import React from 'react';
import {
  View,
  Image,
  StatusBar
} from 'react-native';
import {
  RkText,
  RkButton,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {DarkKittenTheme} from '../../config/darkTheme';
import {KittenTheme} from '../../config/theme';
import {GradientButton} from '../../components/';

export class Themes extends React.Component {
  static navigationOptions = {
    title: 'Theme'.toUpperCase()
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <RkText>Light Theme</RkText>
          <Image source={require('../../assets/images/lightThemeImage.png')}/>
          <GradientButton
            text='APPLY'
            onPress={() => {
              StatusBar.setBarStyle('dark-content', true);
              RkTheme.setTheme(KittenTheme);
            }}/>
        </View>
        <View style={styles.container}>
          <RkText>Dark Theme</RkText>
          <Image source={require('../../assets/images/darkThemeImage.png')}/>
          <GradientButton
            text='APPLY'
            onPress={() => {
              RkTheme.setTheme(DarkKittenTheme);
              StatusBar.setBarStyle('light-content', true);
            }}/>

        </View>
      </View>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.back.base,
    flex: 1,
    paddingHorizontal: 72,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  }
}));