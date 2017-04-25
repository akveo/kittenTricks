import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  ScrollView,
  Platform
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {RkText} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';


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
          onPress={() => this._navigateAction(route)}>
          <View>
            <RkText>{route.title}</RkText>
          </View>
        </TouchableHighlight>
      )
    });

    return (
      <ScrollView style={styles.root}>
        {menu}
      </ScrollView>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'red'
  },
  root: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});