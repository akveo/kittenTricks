import React from 'react';
import {View, StyleSheet} from 'react-native';

export class Ellipsis extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dot}/>
        <View style={styles.dot}/>
        <View style={styles.dot}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginHorizontal:5,
    marginVertical:10
  },
  dot: {
    height: 5.5,
    width: 5.5,
    borderRadius:3,
    backgroundColor: 'black',
    marginHorizontal:2.5
  }
});