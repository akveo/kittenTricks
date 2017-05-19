/*
 *
 * This is modified version of https://github.com/poberwong/react-native-switch-pro
 * Copyright (c) 2016 PoberWong
 *
 */
import React from 'react'
import {
  Animated,
  Easing,
  PanResponder,
} from 'react-native';
import {RkComponent} from 'react-native-ui-kitten'

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
      offColor: 'offColor'
    },
    thumb: {}
  };
  selectedType = 'selected';

  constructor(props, context) {
    super(props, context);

    this.offset = width - height;
    this.handlerSize = height;

    const value = props.value || props.defaultValue;
    this.state = {
      value,
      toggleable: true,
      alignItems: value ? 'flex-end' : 'flex-start',
      left: value ? onLeftValue : offLeftValue,
      handlerAnimation: new Animated.Value(this.handlerSize),
      switchAnimation: new Animated.Value(value ? -1 : 1)
    }
  }

  componentWillReceiveProps(nextProps) {
    const {value} = this.state;
    if (nextProps === this.props) {
      return
    }

    if (typeof nextProps.value !== 'undefined' && nextProps.value !== value) {
      this.toggleSwitch(true)
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onPanResponderRelease
    })
  }

  _onPanResponderGrant = (evt, gestureState) => {
    this.animateHandler(height * 0.9)
  };

  _onPanResponderMove = (evt, gestureState) => {
    const {value, toggleable} = this.state;

    this.setState({
      toggleable: value ? (gestureState.dx < 10) : (gestureState.dx > -10)
    })
  };

  _onPanResponderRelease = (evt, gestureState) => {
    const {toggleable} = this.state;
    const {disabled, onValueChange} = this.props;

    if (toggleable && !disabled) {
      if (onValueChange) {
        this.toggleSwitch(true, onValueChange)
      }
    }
  };

  toggleSwitch = (result, callback = () => null) => {
    const {value, switchAnimation} = this.state;
    const toValue = !value;

    this.animateHandler(this.handlerSize);
    if (result) {
      this.animateSwitch(toValue, () => {
        callback(toValue);
        this.setState({
          value: toValue,
          left: toValue ? onLeftValue : offLeftValue
        });
        switchAnimation.setValue(toValue ? -1 : 1)
      })
    }
  };

  animateSwitch = (value, callback = () => null) => {
    const {switchAnimation} = this.state;

    Animated.timing(switchAnimation,
      {
        toValue: value ? this.offset : -this.offset,
        duration: animationDuration,
        easing: Easing.linear
      }
    ).start(callback)
  };

  animateHandler = (value, callback = () => null) => {
    const {handlerAnimation} = this.state;

    Animated.timing(handlerAnimation,
      {
        toValue: value,
        duration: animationDuration,
        easing: Easing.linear
      }
    ).start(callback)
  };

  render() {
    const {switchAnimation, handlerAnimation, left, value} = this.state;
    const {
      style,
      ...rest
    } = this.props;

    let type = value ? this.selectedType : '';
    let {container, thumb} = this.defineStyles(type);
    let onColor = this.extractNonStyleValue(container, 'onColor');
    let offColor = this.extractNonStyleValue(container, 'offColor');

    const interpolatedBackgroundColor = switchAnimation.interpolate({
      inputRange: [1, height],
      outputRange: value ? [onColor, offColor] : [offColor, onColor]
    });

    return (
      <Animated.View
        {...rest}
        {...this._panResponder.panHandlers}
        style={[style, container, {
          backgroundColor: interpolatedBackgroundColor
        }]}>
        <Animated.View style={[thumb, {
          position: 'absolute',
          left,
          height: handlerAnimation,
          transform: [{translateX: switchAnimation}]
        }]}/>
      </Animated.View>
    )
  }
}