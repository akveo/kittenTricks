import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme);

  RkTheme.setType('RkButton','basic',{
    content:{
      fontFamily:'icomoon'
    }
  });
};