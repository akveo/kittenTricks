import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import {
  RkText,
  RkTheme
} from 'react-native-ui-kitten';
import {FontAwesome} from '../assets/icons';

export class FindFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = {color: this.props.selected ? this.props.color : RkTheme.current.colors.disabled};

    return (
      <TouchableOpacity style={[styles.wrapper, this.props.style]} onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.text}>
            <RkText rkType='awesome' style={[styles.icon, color]}>{this.props.icon}</RkText>
            <RkText rkType='header6' style={color}>{`Find Friends With ${this.props.text}`}</RkText>
          </View>
          <RkText rkType='awesome small' style={color}>{FontAwesome.chevronRight}</RkText>
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18
  },
  text: {
    flexDirection: 'row'
  },
  icon: {
    width: 35
  }
});