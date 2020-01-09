import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

/**
 * https://github.com/react-navigation/navigation-ex
 */
export const useNavigation = () => {
  const lib = require('@react-navigation/native');

  if (!lib) {
    const message: string = [
      '@react-navigation/native: module not installed',
      'using fake call',
    ].join('\n');

    console.warn(message);

    return {};
  }

  return lib.useNavigation();
};

/**
 * https://github.com/APSL/react-native-keyboard-aware-scroll-view
 */
export const KeyboardAvoidingView = (props): React.ReactElement => {
  const lib = require('react-native-keyboard-aware-scroll-view');

  const defaultProps: ScrollViewProps = {
    style: { flex: 1 },
    contentContainerStyle: { flexGrow: 1 },
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  if (!lib) {
    const message: string = [
      'react-native-keyboard-aware-scroll-view: module not installed',
      'using fake call',
    ].join('\n');

    console.warn(message);

    return React.createElement(ScrollView, defaultProps);
  }

  return React.createElement(lib.KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
};

