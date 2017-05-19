import React from 'react';
import {
  ListView,
  View,
  StyleSheet, Image
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';
import {Avatar} from '../../components/avatar';
import {KittenTheme} from '../../config/theme';
import {Data} from '../../data';
let moment = require('moment');

export class Notifications extends React.Component {
  static navigationOptions = {
    title: 'Notifications'
  };

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = ds.cloneWithRows(Data.getNotifications());
  }


  renderRow(row) {

    let hasAttachment = row.attach !== undefined;
    let attachment = <View/>;

    let mainContentStyle;
    if (hasAttachment) {
      mainContentStyle = styles.mainContent;
      attachment =
        <Image style={styles.attachment} source={row.attach}/>
    }

    return (
      <View style={styles.container}>
        <Avatar img={row.photo}
                rkType='circle'
                style={styles.avatar}
                badge={row.action}/>
        <View style={styles.content}>
          <View style={mainContentStyle}>
            <View style={styles.text}>
              <RkText>
                <RkText rkType='header6'>{row.username}</RkText>
                <RkText rkType='primary2'> {row.description}</RkText>
              </RkText>
            </View>
            <RkText rkType='secondary5 secondaryColor'>{moment().add(row.time, 'seconds').fromNow()}</RkText>
          </View>
          {attachment}
        </View>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.data}
        renderRow={this.renderRow}/>

    )
  }
}

let styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline,
    alignItems: 'flex-start'
  },
  avatar: {},
  text: {
    marginBottom: 5,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  }
});