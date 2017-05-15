import React from 'react';
import PropTypes from 'prop-types'
import {
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';
import {KittenTheme} from '../../config/theme';

export class CategoryMenu extends React.Component {

  constructor(props) {
    super(props);
    this.isEmpty = this.props.items.length === 0;
    if (!this.isEmpty) {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.data = ds.cloneWithRows(this.props.items);
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
        underlayColor={KittenTheme.colors.back.neutral}
        activeOpacity={1}
        onPress={() => {
          this.navigate(row);
        }}>
        <View>
          <RkText>{row.title}</RkText>
        </View>
      </TouchableHighlight>
    )
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
        <ListView
          dataSource={this.data}
          renderRow={this.renderRow}/>
      )
    }
  }
}

let styles = StyleSheet.create({
  item: {
    paddingVertical: 32.5,
    paddingHorizontal: 16.5,
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

CategoryMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};