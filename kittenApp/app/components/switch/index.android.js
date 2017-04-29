import React from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';
import {RkComponent} from 'react-native-ui-kitten'
import hexToRgb from '../../utils/colorUtils';

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

  constructor(props) {
    super(props);

    this.duration = 100;
    this.leftPos = -1;
    this.rightPos = 19;

    this.state = {
      selected: this.props.value
    };
  }

  componentWillMount() {
    this.positionValue = new Animated.Value(this.state.selected ? this.rightPos : this.leftPos);
    this.animatedValue = new Animated.Value(this.state.selected ? 0 : 100);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => true,
      onPanResponderMove: (e, gestureState) => {
        this.inMove = true;
        let x = gestureState.dx;
        if (x > 10)
          this._changeState(true);

        if (x < -10)
          this._changeState(false);
      },
      onPanResponderRelease: (e, gestureState) => {
        if (!this.inMove && gestureState.dx < 1) {
          this._changeState(!this.state.selected);
        }
        this.inMove = false;
      }
    })
  };

  _getAnimatedValues(onColor, offColor) {
    let range;
    if (this.state.selected)
      range = [onColor, offColor];
    else
      range = [offColor, onColor];

    let color = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: range
    });

    return {position: this.positionValue, back: color}
  }

  _changeState(value) {
    this.setState({selected: value});
    this.props.onValueChange(value);
    this.animatedValue = new Animated.Value(0);

    let pos;
    if (value)
      pos = this.rightPos;
    else
      pos = this.leftPos;

    Animated.timing(this.positionValue, {
      toValue: pos,
      duration: this.duration,
    }).start();

    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: this.duration,
    }).start();
  }

  render() {
    let {container, thumb} = this.defineStyles(this.state.selected ? this.selectedType : '');

    let onColor = this.extractNonStyleValue(container, 'onColor');
    let offColor = this.extractNonStyleValue(container, 'offColor');

    let {position, back} = this._getAnimatedValues(hexToRgb(onColor), hexToRgb(offColor));

    let {style, ...otherProps} = this.props;
    return (
      <Animated.View
        hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        style={[container, style, {backgroundColor: back}]}
        {...this.panResponder.panHandlers}
        {...otherProps}>
        <Animated.View style={[thumb, {left: position},]}/>
      </Animated.View>
    )
  }
}