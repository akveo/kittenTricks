import React from 'react';
import {
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/navigation/routes';

export class ListMenu extends React.Component {
  static navigationOptions = {
    title: 'List Menu'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.data = ds.cloneWithRows(MainRoutes);
    this.renderRow = this._renderRow.bind(this);
  }

  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate(row.id)
        }}>
        <View style={styles.container}>
          <RkText style={styles.icon}
                  rkType='primary moon xxlarge'>{row.icon}</RkText>
          <RkText>{row.title}</RkText>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.data}
        renderRow={this.renderRow}
      />
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16
  }
}));