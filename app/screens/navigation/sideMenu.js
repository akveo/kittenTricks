import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import { MainRoutes } from '../../config/navigation/routes';
import { FontAwesome } from '../../assets/icons';
import NavigationType from '../../config/navigation/propTypes';

export class SideMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };

  onMenuItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../assets/images/smallLogo.png') : require('../../assets/images/smallLogoDark.png')
  );

  renderIcon = () => (
    <Image style={styles.icon} source={this.getThemeImageSource(RkTheme.current)} />
  );

  renderMenu = () => MainRoutes.map(this.renderMenuItem);

  renderMenuItem = (item) => (
    <TouchableHighlight
      style={styles.container}
      key={item.id}
      underlayColor={RkTheme.current.colors.button.underlay}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <RkText
            style={styles.icon}
            rkType='moon primary xlarge'>{item.icon}
          </RkText>
          <RkText>{item.title}</RkText>
        </View>
        <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
      </View>
    </TouchableHighlight>
  );

  render = () => (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.content]}>
          {this.renderIcon()}
          <RkText rkType='logo'>UI Kitten</RkText>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
}));
