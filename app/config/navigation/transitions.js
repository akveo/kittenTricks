import {
  Dimensions,
  Platform
} from 'react-native';

let {width} = Dimensions.get('window');

let IosTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1];
  const outputRange = [width, 0, -10, -10];

  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange,
  });

  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1, 0],
  });
  return {
    opacity,
    transform: [{translateX}, {translateY}],
  };
};

let DroidTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1];

  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1, 0],
  });

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  });

  return {
    opacity,
    transform: [{translateX}, {translateY}],
  };
};

function transition() {
  return {
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps;
      const {index} = scene;
      if (Platform.OS === 'ios')
        return IosTransition(index, position);
      return DroidTransition(index, position);
    }
  }
}

export default transition;