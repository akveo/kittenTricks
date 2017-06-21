import React from 'react';
import PropTypes from 'prop-types'
import {
  TouchableHighlight,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import {
  RkStyleSheet,
  RkTheme,
  RkText
} from 'react-native-ui-kitten';

export class CategoryMenu extends React.Component {

  constructor(props) {
    super(props);
    this.isEmpty = this.props.items.length === 0;
    if (!this.isEmpty) {
      this.data = this.props.items;
      this.renderRow = this._renderRow.bind(this);
      this.navigate = this._navigate.bind(this);
    }
    this.state = {selected: true};
  }

  _navigate(row) {
    if (row.action) {
      this.props.navigation.navigate(row.action)
    } else {
      this.props.navigation.navigate(row.id)
    }
  }


  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        underlayColor={RkTheme.current.colors.button.underlay}
        activeOpacity={1}
        onPress={() => {
          this.navigate(row.item);
        }}>
        <View>
          <RkText>{row.item.title}</RkText>
        </View>
      </TouchableHighlight>
    )
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    if (this.isEmpty) {
      return (
        <View style={styles.emptyContainer}>
          <RkText rkType='light subtitle'>Coming Soon...</RkText>
        </View>
      )
    } else {
      return (
        <FlatList
          style={styles.list}
          data={this.data}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRow}/>
      )
    }
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    paddingVertical: 32.5,
    paddingHorizontal: 16.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  list: {
    backgroundColor: theme.colors.screen.base
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.screen.base
  }
}));

CategoryMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};