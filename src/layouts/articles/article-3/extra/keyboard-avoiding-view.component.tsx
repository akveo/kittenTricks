import React from 'react';
import {
  Animated,
  Easing,
  EmitterSubscription,
  Keyboard,
  KeyboardEvent,
  KeyboardEventName,
  Platform,
  TouchableWithoutFeedback,
  TransformsStyle,
  ViewProps,
} from 'react-native';

export interface KeyboardAvoidingViewProps extends ViewProps {
  offset?: (height: number) => number;
  autoDismiss?: boolean;
  children: React.ReactNode;
}

const animationDuration: number = Platform.select({
  android: 160,
  default: 250,
});

const showEvent: KeyboardEventName = Platform.select({
  android: 'keyboardDidShow',
  default: 'keyboardWillShow',
});

const hideEvent: KeyboardEventName = Platform.select({
  android: 'keyboardDidHide',
  default: 'keyboardWillHide',
});

const defaultProps: Partial<KeyboardAvoidingViewProps> = {
  offset: height => height,
};

const translateY = new Animated.Value(0);

export const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps): React.ReactElement => {

  const { style, offset, autoDismiss, ...viewProps } = { ...defaultProps, ...props };

  React.useEffect(() => {
    const showEventSubscription: EmitterSubscription = Keyboard.addListener(
      showEvent,
      onKeyboardShow,
    );
    const hideEventSubscription: EmitterSubscription = Keyboard.addListener(
      hideEvent,
      onKeyboardHide,
    );
    return () => {
      showEventSubscription.remove();
      hideEventSubscription.remove();
    };
  });

  const onKeyboardShow = (event: KeyboardEvent): void => {
    const offsetValue: number = -offset(event.endCoordinates.height);
    createTranslateAnimation({ offsetValue }).start();
  };

  const onKeyboardHide = (event: KeyboardEvent): void => {
    const offsetValue: number = 0;
    createTranslateAnimation({ offsetValue }).start();
  };

  const createTranslateAnimation = (params: { offsetValue: number }): Animated.CompositeAnimation => {
    return Animated.timing(translateY, {
      toValue: params.offsetValue,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  };

  const transformsStyle: TransformsStyle = {
    // @ts-ignore
    transform: [{ translateY }],
  };

  return (
    <TouchableWithoutFeedback
      disabled={!autoDismiss}
      onPress={Keyboard.dismiss}>
      <Animated.View
        style={[transformsStyle, style]}
        {...viewProps}
      />
    </TouchableWithoutFeedback>
  );
};
