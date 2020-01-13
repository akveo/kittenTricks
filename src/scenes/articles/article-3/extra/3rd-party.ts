import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

/**
 * https://github.com/th3rdwave/react-native-safe-area-context
 */
export const useSafeArea = () => {
  const lib = require('react-native-safe-area-context');

  if (!lib) {
    const message: string = [
      'react-native-safe-area-context: module not installed',
      'using fake call',
    ].join('\n');

    console.warn(message);

    return { top: 0, bottom: 0, right: 0, left: 0 };
  }

  return lib.useSafeArea();
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

