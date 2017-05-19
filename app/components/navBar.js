import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Dimensions
} from 'react-native';
import _ from 'lodash';
import {RkText, RkButton} from 'react-native-ui-kitten';
import {FontAwesome} from '../assets/icons';
import {KittenTheme} from '../config/theme';

const appbarHeight = Platform.OS === 'ios' ? 44 : 56;
const statusbarHeight = Platform.OS === 'ios' ? 20 : 0;

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: undefined};
  }

  _renderRight(headerRight) {
    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    return headerRight && (
        <View style={[{width}, styles.right]}>{headerRight}</View>
      );
  }

  _renderLeft(headerLeft) {
    if (headerLeft) {
      return (
        <View style={styles.left}>{headerLeft}</View>
      )
    }

    let windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    let renderLeftContent = () => {
      let index = _.findIndex(this.props.headerProps.scenes, {isActive: true});
      if (index > 0) {
        return <RkButton
          rkType='clear'
          style={styles.menu}
          onPress={() => {
            this.props.navigation.goBack()
          }}>
          <RkText rkType='awesome hero'>{FontAwesome.chevronLeft}</RkText>
        </RkButton>
      }
      else {
        return <RkButton
          rkType='clear'
          style={styles.menu}
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen')
          }}>
          <RkText rkType='awesome'>{FontAwesome.bars}</RkText>
        </RkButton>
      }
    };

    return (
      <View style={[{width}, styles.left]}>
        {renderLeftContent()}
      </View>
    )
  }

  _renderTitle(title, headerTitle) {
    if (headerTitle) {
      return (
        <View style={styles.title} onLayout={onLayout}>{headerTitle}</View>);
    }

    const onLayout = (e) => {
      this.setState({
        width: e.nativeEvent.layout.width,
      });
    };

    return (
      <View style={styles.title} onLayout={onLayout}>
        <RkText>{title}</RkText>
      </View>
    )
  }

  render() {
    let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          {this._renderTitle(options.title, options.headerTitle)}
          {this._renderLeft(options.headerLeft)}
          {this._renderRight(options.headerRight)}
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  layout: {
    backgroundColor: KittenTheme.colors.back.base,
    paddingTop: statusbarHeight,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4
  },
  container: {
    flexDirection: 'row',
    height: appbarHeight,

  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 40
  }
});