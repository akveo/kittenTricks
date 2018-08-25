import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';

export class PaginationIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem(index, selected) {
    const style = [styles.base];
    if (selected) { style.push(styles.selected); }
    return (
      <View key={index} style={style} />
    );
  }

  _renderIndicators() {
    const length = this.props.length;
    const current = this.props.current;

    const indicators = [];
    for (let i = 0; i < length; i++) {
      indicators.push(this._renderItem(i, i === current));
    }

    return indicators;
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderIndicators()}
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
  },
  base: {
    width: 8,
    height: 8,
    borderRadius: 5,
    borderColor: theme.colors.brand,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: theme.colors.brand,
  },
}));
