import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { RkText, RkButton, RkStyleSheet } from 'react-native-ui-kitten';
import { FontAwesome } from '../assets/icons';
import { UIConstants } from '../config/appConstants';
import NavigationType from '../config/navigation/propTypes';

export class NavBar extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
    headerProps: PropTypes.shape().isRequired,
  };

  onNavigationLeftMenuButtonPressed = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  onNavigationLeftBackButtonPressed = () => {
    this.props.navigation.goBack();
  };

  renderTitleItem = (title, options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomTitleItem(options) : this.renderNavigationTitleItem(title);
  };

  renderLeftItem = (options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomLeftItem(options) : this.renderNavigationLeftItem();
  };

  renderRightItem = (options) => {
    const isCustom = options !== undefined;
    return isCustom ? this.renderCustomRightItem(options) : this.renderNavigationRightItem();
  };

  renderNavigationTitleItem = (title) => (
    <View style={styles.title}>
      <RkText>{title}</RkText>
    </View>
  );

  renderNavigationLeftBackItem = () => (
    <RkButton
      rkType='clear'
      style={styles.menu}
      onPress={this.onNavigationLeftBackButtonPressed}>
      <RkText rkType='awesome hero'>{FontAwesome.chevronLeft}</RkText>
    </RkButton>
  );

  renderNavigationLeftMenuItem = () => (
    <RkButton
      rkType='clear'
      style={styles.menu}
      onPress={this.onNavigationLeftMenuButtonPressed}>
      <RkText rkType='awesome'>{FontAwesome.bars}</RkText>
    </RkButton>
  );

  renderNavigationLeftItemContent = (sceneIndex) => {
    const isFirstScene = sceneIndex === 0;
    return isFirstScene ? this.renderNavigationLeftMenuItem() : this.renderNavigationLeftBackItem();
  };

  renderNavigationLeftItem = () => {
    const sceneIndex = _.findIndex(this.props.headerProps.scenes, { isActive: true });
    return (
      <View style={styles.left}>
        {this.renderNavigationLeftItemContent(sceneIndex)}
      </View>
    );
  };

  renderNavigationRightItem = () => undefined;

  renderCustomTitleItem = (options) => (
    <View
      style={styles.title}>
      {options}
    </View>
  );

  renderCustomLeftItem = (options) => (
    <View style={styles.left}>{options}</View>
  );

  renderCustomRightItem = (options) => (
    <View style={styles.right}>{options}</View>
  );

  render() {
    const { options } = this.props.headerProps.scene.descriptor;
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          {this.renderTitleItem(options.title, options.headerTitle)}
          {this.renderLeftItem(options.headerLeft)}
          {this.renderRightItem(options.headerRight)}
        </View>
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  layout: {
    backgroundColor: theme.colors.screen.base,
    paddingTop: UIConstants.StatusbarHeight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.border.base,
  },
  container: {
    flexDirection: 'row',
    height: UIConstants.AppbarHeight,

  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 40,
  },
}));
