import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  RkStyleSheet,
  RkTheme,
  RkText,
} from 'react-native-ui-kitten';
import NavigationType from '../../config/navigation/propTypes';

export class CategoryMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })).isRequired,
  };

  onItemPressed = (item) => {
    const url = item.action || item.id;
    this.props.navigation.navigate(url);
  };

  extractItemKey = (item) => item.id;

  renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.item}
      underlayColor={RkTheme.current.colors.button.underlay}
      activeOpacity={1}
      onPress={() => this.onItemPressed(item)}>
      <View>
        <RkText>{item.title}</RkText>
      </View>
    </TouchableHighlight>
  );

  renderPlaceholder = () => (
    <View style={styles.emptyContainer}>
      <RkText rkType='light subtitle'>Coming Soon...</RkText>
    </View>
  );

  renderList = () => (
    <FlatList
      style={styles.list}
      data={this.props.items}
      keyExtractor={this.extractItemKey}
      renderItem={this.renderItem}
    />
  );

  render = () => (this.props.items.length === 0 ? this.renderPlaceholder() : this.renderList());
}

const styles = RkStyleSheet.create(theme => ({
  item: {
    paddingVertical: 32.5,
    paddingHorizontal: 16.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.screen.base,
  },
}));
