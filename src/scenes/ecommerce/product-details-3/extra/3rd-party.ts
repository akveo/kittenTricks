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


