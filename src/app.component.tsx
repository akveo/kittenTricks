// TODO: now @kitten/... linked to the local react-native-ui-kitten project
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button as ReactButton,
  Alert,
} from 'react-native';
import {
  ThemeMappingType,
  ThemeStyleType,
} from 'eva/packages/types';
import {
  ApplicationProvider,
  ThemeType,
} from '@kitten/theme';
import {
  Button,
} from '@kitten/ui';
import {
  mapping,
  style,
} from 'eva/packages/mapping-kitten/eva';
import { theme } from 'eva/packages/theme/eva';

interface State {
  mapping: ThemeMappingType;
  styles: ThemeStyleType;
  theme: ThemeType;
}

export default class App extends React.Component<{}, State> {

  public state: State = {
    mapping: mapping,
    styles: style,
    theme: theme,
  };

  public render(): React.ReactNode {
    return (
      <ApplicationProvider
        styles={this.state.styles}
        theme={this.state.theme}
        mapping={this.state.mapping}>
        <View style={styles.container}>
          <Button
            onPress={() => Alert.alert('Kitten on press')}>Kitten Button</Button>
          <ReactButton
            title={'Test'}
            onPress={() => Alert.alert('React on press')}/>
          <Text>Hello Kitten!</Text>
        </View>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
