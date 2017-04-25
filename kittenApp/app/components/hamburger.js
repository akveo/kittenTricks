import React from 'react';
import {RkButton} from 'react-native-ui-kitten';
import PropTypes from 'prop-types'

export class Hamburger extends React.Component {

  render() {
    return (
      <RkButton onPress={
        () => {
          this.props.navigation.navigate('DrawerOpen')
        }
      } style={{height: 20, width: 20, backgroundColor: 'black'}}/>
    )
  }
}

Hamburger.propTypes = {
  navigation: PropTypes.object.isRequired
};