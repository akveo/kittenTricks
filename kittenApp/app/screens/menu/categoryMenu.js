import React from 'react';
import PropTypes from 'prop-types'
import {
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';
import {RkText} from 'react-native-ui-kitten';


export class CategoryMenu extends React.Component {
  render() {
    let menu = this.props.items.map((route, index) => {
      return (
        <TouchableHighlight
          key={index}
          onPress={() => {
            this.props.navigation.navigate(route.id)
          }}>
          <View>
            <RkText>{route.title}</RkText>
          </View>
        </TouchableHighlight>
      )
    });

    return (
      <ScrollView>
        {menu}
      </ScrollView>
    )
  }
}

CategoryMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};