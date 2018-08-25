import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';

export class Ellipsis extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  dot: {
    height: 5.5,
    width: 5.5,
    borderRadius: 3,
    backgroundColor: theme.colors.text.base,
    marginHorizontal: 2.5,
  },
}));
