import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import {
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import { FontAwesome } from '../assets/icons';

export class FindFriends extends React.Component {
  static propTypes = {
    selected: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
  };
  static defaultProps = {
    selected: false,
    color: RkTheme.current.colors.text.base,
    onPress: (() => null),
    style: {},
  };

  render = () => {
    const color = this.props.selected ? this.props.color : RkTheme.current.colors.disabled;
    return (
      <TouchableOpacity style={[styles.wrapper, this.props.style]} onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.text}>
            <RkText rkType='awesome' style={[styles.icon, { color }]}>{this.props.icon}</RkText>
            <RkText rkType='header6' style={{ color }}>{`Find Friends With ${this.props.text}`}</RkText>
          </View>
          <RkText rkType='awesome small' style={{ color }}>{FontAwesome.chevronRight}</RkText>
        </View>
      </TouchableOpacity>
    );
  };
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
    paddingVertical: 18,
  },
  text: {
    flexDirection: 'row',
  },
  icon: {
    width: 35,
  },
});
