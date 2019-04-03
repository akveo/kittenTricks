import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface ComponentProps {
  children: React.ReactNode;
}

export type AvoidKeyboardProps = TouchableWithoutFeedbackProps & ComponentProps;

export const AvoidKeyboard = (props?: AvoidKeyboardProps): React.ReactElement<TouchableWithoutFeedbackProps> => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      {...props}
    />
  );
};
