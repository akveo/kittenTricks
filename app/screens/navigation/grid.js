import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import {
  RkButton,
  RkText
} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';
import {KittenTheme} from '../../config/theme';
import LinearGradient from 'react-native-linear-gradient';
const paddingValue = 8;

export class GridV1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Grid Menu'.toUpperCase(),
  });

  constructor(props) {
    super(props);
  }


  _calculateItemSize() {
    let {height, width} = Dimensions.get('window');
    let buttonWidth = (width - paddingValue * 6) / 2;
    return buttonWidth;
  }

  render() {
    let size = this._calculateItemSize();
    let navigate = this.props.navigation.navigate;

    let items = MainRoutes.map(function (route, index) {
      return (
        <RkButton
          rkType='square shadow'
          style={{width: size, height: size}}
          key={index}
          onPress={() => {
            navigate(route.id)
          }}>

          <RkText style={styles.icon} rkType='primary moon xxlarge'>
            {route.icon}
          </RkText>
          <RkText>{route.title}</RkText>

        </RkButton>
      )
    });


    return (
      <ScrollView style={styles.root}
                  contentContainerStyle={styles.rootContainer}>

        {items}
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  root: {
    backgroundColor: KittenTheme.colors.back.neutral,
    padding: paddingValue,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  icon: {marginBottom: 16}
});