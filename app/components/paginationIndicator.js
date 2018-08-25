import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';

export class PaginationIndicator extends React.Component {
  renderIndicatorItem = (index, selected) => (
    <View style={selected ? [styles.base, styles.selected] : styles.base} key={index} />
  );

  renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < this.props.length; i++) {
      indicators.push(this.renderIndicatorItem(i, i === this.props.current));
    }
    return indicators;
  };

  render = () => (
    <View style={styles.container}>
      {this.renderIndicators()}
    </View>
  );
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
