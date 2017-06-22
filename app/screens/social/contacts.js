import React from 'react';
import {
  ListView,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import {
  RkStyleSheet,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components/avatar';
import {FontAwesome} from '../../assets/icons';

export class Contacts extends React.Component {
  static navigationOptions = {
    title: 'Contacts'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.users = data.getUsers();

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(this.users)
    };

    this.filter = this._filter.bind(this);
    this.setData = this._setData.bind(this);
    this.renderHeader = this._renderHeader.bind(this);
    this.renderRow = this._renderRow.bind(this);
  }

  _setData(data) {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      data: ds.cloneWithRows(data)
    })
  }

  _renderRow(row) {
    let name = `${row.firstName} ${row.lastName}`;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileV1', {id: row.id})}>
        <View style={styles.container}>
          <Avatar rkType='circle' style={styles.avatar} img={row.photo}/>
          <RkText>{name}</RkText>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View style={styles.separator}/>
    )
  }

  _renderHeader() {
    return (
      <View style={styles.searchContainer}>
        <RkTextInput autoCapitalize='none'
                     autoCorrect={false}
                     onChange={(event) => this._filter(event.nativeEvent.text)}
                     label={<RkText rkType='awesome'>{FontAwesome.search}</RkText>}
                     rkType='row'
                     placeholder='Search'/>
      </View>
    )
  }

  _filter(text) {
    let pattern = new RegExp(text, 'i');
    let users = _.filter(this.users, (user) => {

      if (user.firstName.search(pattern) != -1
        || user.lastName.search(pattern) != -1)
        return user;
    });

    this.setData(users);
  }

  render() {
    return (
      <ListView
        style={styles.root}
        dataSource={this.state.data}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        renderHeader={this.renderHeader}
        enableEmptySections={true}/>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center'
  },
  avatar: {
    marginRight: 16
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base
  }
}));