import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import {
  RkText,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { DarkKittenTheme } from '../../config/darkTheme';
import { KittenTheme } from '../../config/theme';
import { GradientButton } from '../../components/gradientButton';
import { scale, scaleVertical } from '../../utils/scale';

export class Themes extends React.Component {
  static navigationOptions = {
    title: 'Theme'.toUpperCase(),
  };

  onLightThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(KittenTheme.colors.screen.base);
    }
    RkTheme.setTheme(KittenTheme);
  };

  onDarkThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(DarkKittenTheme.colors.screen.base);
    }
    RkTheme.setTheme(DarkKittenTheme);
  };

  render = () => (
    <View style={styles.root}>
      <View style={styles.container}>
        <RkText>Light Theme</RkText>
        <Image style={styles.image} source={require('../../assets/images/lightThemeImage.png')} />
        <GradientButton
          text='APPLY'
          onPress={this.onLightThemeApplyButtonPressed}
        />
      </View>
      <View style={styles.container}>
        <RkText>Dark Theme</RkText>
        <Image style={styles.image} source={require('../../assets/images/darkThemeImage.png')} />
        <GradientButton
          text='APPLY'
          onPress={this.onDarkThemeApplyButtonPressed}
        />
      </View>
    </View>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    flex: 1,
    paddingHorizontal: scale(72),

  },
  image: {
    height: scaleVertical(160),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scaleVertical(20),
  },
}));
