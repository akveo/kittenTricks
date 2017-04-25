import React from 'react';
import {View} from 'react-native';

export class SplashScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000)
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f53d56'}}/>
    )
  }
}