import React from 'react';
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import { ApplicationProvider } from '@kitten/theme';
import { Button } from '@kitten/ui';
import { default as mapping } from '@eva/eva';
import { theme } from '@eva/theme-eva';

export default class App extends React.Component {

  private onKittenButtonPress = () => {
    Alert.alert('Kitten on press');
  };

  public render(): React.ReactNode {
    return (
      <ApplicationProvider
        theme={theme}
        mapping={mapping}>
        <View style={styles.container}>
          <Button
            size='giant'
            status='success'
            onPress={this.onKittenButtonPress}>
            Kitten Button
          </Button>
        </View>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
