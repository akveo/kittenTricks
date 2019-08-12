import React from 'react';
import {
  Animated,
  Easing,
  EventSubscription,
  Keyboard,
  KeyboardEvent,
  KeyboardEventName,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface AvoidKeyboardProps extends ViewProps {
  offset?: (height: number) => number;
  autoDismiss?: boolean;
}

export class AvoidKeyboard extends React.Component<AvoidKeyboardProps> {

  static defaultProps: Partial<AvoidKeyboardProps> = {
    offset: (height: number): number => height,
    autoDismiss: true,
  };

  private translateY = new Animated.Value(0);

  private animationDuration: number = Platform.select({
    android: 160,
    default: 250,
  });

  // @ts-ignore
  private showEvent: KeyboardEventName = Platform.select({
    android: 'keyboardDidShow',
    default: 'keyboardWillShow',
  });

  // @ts-ignore
  private hideEvent: KeyboardEventName = Platform.select({
    android: 'keyboardDidHide',
    default: 'keyboardWillHide',
  });

  private keyboardShowSubscription: EventSubscription;
  private keyboardHideSubscription: EventSubscription;

  public componentDidMount() {
    this.keyboardShowSubscription = Keyboard.addListener(this.showEvent, this.onKeyboardShow);
    this.keyboardHideSubscription = Keyboard.addListener(this.hideEvent, this.onKeyboardHide);
  }

  public componentWillUnmount() {
    this.keyboardShowSubscription.remove();
    this.keyboardHideSubscription.remove();
  }

  private onKeyboardShow = (event: KeyboardEvent) => {
    const offset: number = -this.props.offset(event.endCoordinates.height);

    this.createTranslateAnimation({ offset }).start();
  };

  private onKeyboardHide = (event: KeyboardEvent) => {
    const offset: number = 0;

    this.createTranslateAnimation({ offset }).start();
  };

  private onContainerPress = () => {
    Keyboard.dismiss();
  };

  private getComponentStyle = (source: StyleProp<ViewStyle>): ViewStyle => {
    return {
      ...styles.container,
      ...styles.transform(this.translateY),
      ...StyleSheet.flatten(source),
    };
  };

  private createTranslateAnimation = (params: { offset: number }): Animated.CompositeAnimation => {
    const { offset } = params;

    return Animated.timing(this.translateY, {
      toValue: offset,
      duration: this.animationDuration,
      easing: Easing.linear,
    });
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, autoDismiss, ...restProps } = this.props;
    const componentStyle: ViewStyle = this.getComponentStyle(style);

    return (
      <TouchableWithoutFeedback
        onPress={this.onContainerPress}
        disabled={!autoDismiss}>
        <Animated.View
          style={componentStyle}
          {...restProps}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // @ts-ignore
  transform: (y: Animated.Value) => ({
    transform: [{ translateY: y }],
  }),
});
