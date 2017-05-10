import React from 'react';
import {
  Platform,
  View
} from 'react-native';
import * as Spacer from 'react-native-keyboard-spacer';

export class KeyboardSpacer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (Platform.OS === 'ios')
      return (<Spacer.default/>);
    else return (<View/>)

  }
}