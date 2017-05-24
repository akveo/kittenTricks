import React from 'react';
import {
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';
import {KittenTheme} from '../../config/theme';

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
        underlayColor={KittenTheme.colors.back.primaryActive}
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
        dataSource={this.data}
        renderRow={this.renderRow}
      />
    )
  }
}

let styles = StyleSheet.create({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline,
    paddingHorizontal: 16
  },
  container: {
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    width:34,
    textAlign:'center',
    marginRight:16
  }
});