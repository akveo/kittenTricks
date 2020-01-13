import React from 'react';
import { Animated, Easing, ImageSourcePropType, StyleSheet } from 'react-native';

export interface LoadingAnimationProps {
  splash: ImageSourcePropType;
  isLoaded: boolean;
}

const animationValue: Animated.Value = new Animated.Value(0);

export const LoadingAnimation = (props: LoadingAnimationProps): React.ReactElement | undefined => {

  const [animationCompleted, setAnimationCompleted] = React.useState<boolean>(false);

  React.useEffect((): void => {
    props.isLoaded && startAnimation();
  }, [props.isLoaded]);

  const startAnimation = (): void => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 700,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    }).start(onAnimationCompleted);
  };

  const onAnimationCompleted = (): void => {
    setAnimationCompleted(true);
  };

  const opacity: Animated.AnimatedInterpolation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const transform = [
    {
      scale: animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5],
      }),
    },
  ];

  const renderAnimatedComponent = (): React.ReactElement => (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.Image
        style={[styles.image, { transform }]}
        source={props.splash}
      />
    </Animated.View>
  );

  return !animationCompleted && renderAnimatedComponent();
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});
