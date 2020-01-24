import { Linking } from 'react-native';

export class WebBrowserService {

  static openBrowserAsync = (url: string): Promise<any> => {
    return Linking.openURL(url);
  };
}
