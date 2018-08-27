import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import { RkSwitch } from './switch/index';

export class SocialSetting extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    tintColor: PropTypes.string,
  };
  static defaultProps = {
    selected: true,
    tintColor: RkTheme.current.colors.accent,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  onSwitchValueChanged = (value) => {
    this.setState({ selected: value });
  };

  render() {
    const color = this.state.selected ? this.props.tintColor : RkTheme.current.colors.disabled;
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <RkText rkType='awesome large' style={[styles.icon, { color }]}>{this.props.icon}</RkText>
          <RkText rkType='small' style={{ color }}>{this.props.name}</RkText>
        </View>
        <RkSwitch value={this.state.selected} onValueChange={this.onSwitchValueChanged} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    alignItems: 'center',
  },
});
