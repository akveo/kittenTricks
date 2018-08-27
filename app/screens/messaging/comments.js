import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import { Avatar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';

const moment = require('moment');

export class Comments extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Comments'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const postId = this.props.navigation.getParam('postId', undefined);
    this.state = {
      data: data.getComments(postId),
    };
  }

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    const navigationParams = { id: item.user.id };
    this.props.navigation.navigate('ProfileV1', navigationParams);
  };

  renderSeparator = () => (
    <View style={styles.separator} />
  );

  renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.onItemPressed(item)}>
        <Avatar rkType='circle' style={styles.avatar} img={item.user.photo} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <RkText rkType='header5'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          <RkText rkType='secondary4 hintColor'>
            {moment().add(item.time, 'seconds').format('LT')}
          </RkText>
        </View>
        <RkText rkType='primary3 mediumLine'>{item.text}</RkText>
      </View>
    </View>
  );

  render = () => (
    <FlatList
      style={styles.root}
      data={this.state.data}
      extraData={this.state}
      ItemSeparatorComponent={this.renderSeparator}
      keyExtractor={this.extractItemKey}
      renderItem={this.renderItem}
    />
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base,
  },
}));
