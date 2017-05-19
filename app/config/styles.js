import {StyleSheet} from 'react-native';
import {Colors} from './theme'

const Styles = StyleSheet.create({
  appHeader: {
    backgroundColor: 'red' //Colors.background,
  },
  appHeaderTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    backgroundColor: 'blue',
  },
  card: {
    backgroundColor: Colors.background
  }
});

export default Styles;