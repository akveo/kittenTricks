import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {RkText} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';
import {KittenTheme} from '../../config/theme';
import {FontAwesome} from '../../assets/icons';


export class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this._navigateAction = this._navigate.bind(this);
  }

  _navigate(route) {
    let resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: route.id})
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    let menu = MainRoutes.map((route, index) => {
      return (
        <TouchableHighlight
          style={styles.container}
          key={route.id}
          underlayColor={KittenTheme.colors.back.primaryActive}
          activeOpacity={1}
          onPress={() => this._navigateAction(route)}>
          <View style={styles.content}>
            <View style={styles.content}>
              <RkText style={styles.icon}
                      rkType='moon accentColor xlarge'>{route.icon}</RkText>
              <RkText>{route.title}</RkText>
            </View>
            <RkText rkType='awesome secondaryColor small'>{FontAwesome.chevronRight}</RkText>
          </View>
        </TouchableHighlight>
      )
    });

    return (
      <ScrollView style={styles.root}>
        <View style={[styles.container, styles.content]}>
          <Image style={styles.icon} source={require('../../assets/images/smallLogo.png')}/>
          <RkText rkType='logo'>UI Kitten</RkText>
        </View>
        {menu}
      </ScrollView>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal:16,
    borderTopWidth: 1,
    borderColor: KittenTheme.colors.border.underline
  },
  root: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 13,
  }
});