import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet
} from 'react-native';

export class Walkthrough extends React.Component {

  constructor(props) {
    super(props);

    this.onScrollEnd = this._onScrollEnd.bind(this);
  }

  _renderItem = ({item}) => {
    let {width} = Dimensions.get('window');
    return (
      <View style={[styles.item, {width: width}]}>
        {item}
      </View>
    );

  };

  _onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    if (this.props.onChanged) {
      this.props.onChanged(pageNum);
    }
  }

  render() {

    let items = this.props.children;

    return (
      <FlatList
        style={styles.list}
        data={items}
        onMomentumScrollEnd={this.onScrollEnd}
        keyExtractor={(item) => items.indexOf(item)}
        pagingEnabled={true}
        horizontal
        renderSeparator={() => null}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        renderItem={this._renderItem}>

      </FlatList>
    )
  }
}

let styles = StyleSheet.create({
  list: {
    flex: 1
  },
  item: {
    flex: 1,
  }
});