import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import {NavigationRoutes} from '../../config/routes';
import {Hamburger} from '../../components/hamburger';
import {FontIcons} from '../../assets/fontIcons';

export class GridV1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Grid Menu V1',

  });

  constructor(props) {
    super(props);
  }

  render() {

    let items = NavigationRoutes.map(function (route, index) {
      return (
        <RkButton key={index}>{route.title}</RkButton>
      )
    });


    return (
      <ScrollView style={styles.root}>
        {items}
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  root: {
    padding: 17
  }
});