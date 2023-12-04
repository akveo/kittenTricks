import 'react-native-gesture-handler'
import {registerRootComponent} from 'expo'
import { AppRegistry, Platform } from 'react-native';
import App from './src/app/app.component';

registerRootComponent(App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('KittenTricks', { rootTag });
}
