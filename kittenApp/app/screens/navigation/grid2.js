import React from 'react';
import {View, Text, Button} from 'react-native';

export class GridV2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'GridV2 title',
    drawerIcon: ({tintColor}) => (
      <View><Text>SUKA</Text></View>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Third')}
        title="Go to 3"
      />
    );
  }
}