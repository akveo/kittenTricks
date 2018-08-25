import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native';

export class ProgressBar extends React.Component {
  state = {
    progress: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    if (this.props.progress >= 0 && this.props.progress !== prevProps.progress) {
      this.animate(this.props.progress);
    }
  }

  animate = (endValue) => {
    Animated.timing(this.state.progress, {
      easing: Easing.inOut(Easing.ease),
      duration: 500,
      toValue: endValue,
    }).start();
  };

  render() {
    const width = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.props.width],
    });
    return (
      <View style={[styles.container, this.props.style, { width: this.props.width }]}>
        <Animated.View style={[styles.value, { width }, { backgroundColor: this.props.color }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 3,
  },
  value: {
    height: 3,
  },
});
