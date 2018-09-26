import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';

export class ListMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'List Menu'.toUpperCase(),
  };

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  extractItemKey = (item) => item.id;

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.onItemPressed(item)}>
      <View style={styles.container}>
        <RkText
          style={styles.icon}
          rkType='primary moon xxlarge'>{item.icon}
        </RkText>
        <RkText>{item.title}</RkText>
      </View>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      style={styles.list}
      data={MainRoutes}
      keyExtractor={this.extractItemKey}
      renderItem={this.renderItem}
    />
  );
}

const styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16,
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16,
  },
}));
