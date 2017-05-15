import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {RkText} from 'react-native-ui-kitten'
import {ProgressBar} from '../../components';
import {Colors , KittenTheme} from '../../config/theme';


let timeFrame = 500;

export class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.progress == 1) {
        clearInterval(this.timer);
        setTimeout(() => {
          this.props.navigation.navigate('Home');
        }, timeFrame);
      } else {
        let random = Math.random() * 0.4;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }
    }, timeFrame)

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../assets/images/splashBack.png')}/>
          <View style={styles.text}>
            <RkText rkType='light' style={styles.hero}>React Native</RkText>
            <RkText rkType='logo' style={styles.appName}>UI Kitten</RkText>
          </View>
        </View>
        <ProgressBar
          color={Colors.accent}
          style={styles.progress}
          progress={this.state.progress} width={320}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flex: 1
  },
  text: {
    alignItems: 'center'
  },
  hero: {
    fontSize: 37,
  },
  appName: {
    fontSize: 62,
  },
  progress: {
    alignSelf: 'center',
    marginBottom: 35,
    backgroundColor: KittenTheme.colors.back.inactive
  }
});