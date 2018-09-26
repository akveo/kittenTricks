import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

export class PaginationIndicator extends React.Component {
  static propTypes = {
    current: PropTypes.number,
    length: PropTypes.number.isRequired,
  };
  static defaultProps = {
    current: 0,
  };

  renderIndicatorItem = (index, selected) => (
    <View style={selected ? [styles.base, styles.selected] : styles.base} key={index} />
  );

  renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < this.props.length; i += 1) {
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

const styles = RkStyleSheet.create(theme => ({
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
