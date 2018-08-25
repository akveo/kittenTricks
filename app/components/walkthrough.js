import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

export class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.itemWidth = Dimensions.get('window').width;
  }

  extractItemKey = (item) => this.props.children.indexOf(item);

  onScrollEnd = (e) => {
    const { contentOffset } = e.nativeEvent;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (this.props.onChanged) {
      this.props.onChanged(pageNum);
    }
  };

  renderItem = ({ item }) => (
    <View style={[styles.item, { width: this.itemWidth }]}>
      {item}
    </View>
  );

  render = () => (
    <FlatList
      style={styles.list}
      data={this.props.children}
      onMomentumScrollEnd={this.onScrollEnd}
      keyExtractor={this.extractItemKey}
      pagingEnabled
      horizontal
      renderSeparator={() => null}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      directionalLockEnabled
      renderItem={this.renderItem}
    />
  );
}

let styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
});
