import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';
import {RkSwitch} from './switch/index';
import {Colors} from '../config/theme';

export class SocialSetting extends React.Component {

  constructor(props) {
    super(props);
    this.base = Colors.disabled;
    this.state = {
      selected: this.props.selected
    }
  }

  render() {

    let color = this.state.selected ? this.props.tintColor : this.base;

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <RkText rkType='awesome large' style={[styles.icon, {color}]}>{this.props.icon}</RkText>
          <RkText rkType='small' style={{color}}>{this.props.name}</RkText>
        </View>
        <RkSwitch value={this.state.selected} onValueChange={(selected) => this.setState({selected})}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    alignItems: 'center'
  }
});