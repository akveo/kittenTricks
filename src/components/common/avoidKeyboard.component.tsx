import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface ComponentProps {
  children: React.ReactNode;
}

type Props = TouchableWithoutFeedbackProps & ComponentProps;

export const AvoidKeyboard = (props?: Props): React.ReactElement<TouchableWithoutFeedbackProps> => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      {...props}
    />
  );
};
