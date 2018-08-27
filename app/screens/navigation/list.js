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

export class ListMenu extends React.Component {
  static navigationOptions = {
    title: 'List Menu'.toUpperCase(),
  };

  extractItemKey = (item) => item.id;

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.item.id);
  };

  renderItem = (item) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.onItemPressed(item)}>
      <View style={styles.container}>
        <RkText
          style={styles.icon}
          rkType='primary moon xxlarge'>{item.item.icon}
        </RkText>
        <RkText>{item.item.title}</RkText>
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
