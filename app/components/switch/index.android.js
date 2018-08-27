/*
 *
 * This is modified version of https://github.com/poberwong/react-native-switch-pro
 * Copyright (c) 2016 PoberWong
 *
 */
import React from 'react';
import {
  Animated,
  Easing,
  PanResponder,
} from 'react-native';
import { RkComponent } from 'react-native-ui-kitten';

const width = 52;
const height = 32;
const animationDuration = 200;
const offLeftValue = -2;
const onLeftValue = 20;

export class RkSwitch extends RkComponent {
  componentName = 'RkSwitch';
  typeMapping = {
    container: {
      onColor: 'onColor',
      offColor: 'offColor',
    },
    thumb: {},
  };
  selectedType = 'selected';

  constructor(props) {
    super(props);
    this.offset = width - height;
    this.handlerSize = height;
    this.state = {
      name: this.props.name,
      value: this.props.value,
      toggleable: true,
      alignItems: this.props.value ? 'flex-end' : 'flex-start',
      left: this.props.value ? onLeftValue : offLeftValue,
      handlerAnimation: new Animated.Value(this.handlerSize),
      switchAnimation: new Animated.Value(this.props.value ? -1 : 1),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps === this.props) {
      return;
    }
    if (typeof nextProps.value !== 'undefined' && nextProps.value !== value) {
      this.toggleSwitch(true);
    }
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: this.onPanResponderGrant,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
    });
  }

  onPanResponderGrant = () => {
    this.animateHandler(height * 0.9);
  };

  onPanResponderMove = (evt, gestureState) => {
    const { value } = this.state;

    this.setState({
      toggleable: value ? (gestureState.dx < 10) : (gestureState.dx > -10),
    });
  };

  onPanResponderRelease = () => {
    const { toggleable } = this.state;
    const { disabled, onValueChange } = this.props;

    if (toggleable && !disabled) {
      if (onValueChange) {
        this.toggleSwitch(onValueChange);
      }
    }
  };

  toggleSwitch = (result, callback = () => null) => {
    const { value, switchAnimation } = this.state;
    const toValue = !value;

    this.animateHandler(this.handlerSize);

    this.animateSwitch(toValue, () => {
      callback(toValue);
      this.setState({
        value: toValue,
        left: toValue ? onLeftValue : offLeftValue,
      });
      switchAnimation.setValue(toValue ? -1 : 1);
    });
  };

  animateSwitch = (value, callback = () => null) => {
    const { switchAnimation } = this.state;

    Animated.timing(
      switchAnimation,
      {
        toValue: value ? this.offset : -this.offset,
        duration: animationDuration,
        easing: Easing.linear,
      },
    ).start(callback);
  };

  animateHandler = (value, callback = () => null) => {
    const { handlerAnimation } = this.state;

    Animated.timing(
      handlerAnimation,
      {
        toValue: value,
        duration: animationDuration,
        easing: Easing.linear,
      },
    ).start(callback);
  };

  render() {
    const {
      switchAnimation, handlerAnimation, left, value,
    } = this.state;
    const {
      style,
      ...rest
    } = this.props;

    const type = value ? this.selectedType : '';
    const { container, thumb } = this.defineStyles(type);
    const onColor = this.extractNonStyleValue(container, 'onColor');
    const offColor = this.extractNonStyleValue(container, 'offColor');

    const interpolatedBackgroundColor = switchAnimation.interpolate({
      inputRange: value ? [-this.offset, -1] : [1, this.offset],
      outputRange: [offColor, onColor],
    });

    return (
      <Animated.View
        {...rest}
        {...this.panResponder.panHandlers}
        style={[style, container, {
          backgroundColor: interpolatedBackgroundColor,
        }]}>
        <Animated.View style={[thumb, {
          position: 'absolute',
          left,
          height: handlerAnimation,
          transform: [{ translateX: switchAnimation }],
        }]}
        />
      </Animated.View>
    );
  }
}
