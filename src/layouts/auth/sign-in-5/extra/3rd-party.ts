import React from 'react';
import { ScrollViewProps } from 'react-native';

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

  return React.createElement(lib.KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
};

